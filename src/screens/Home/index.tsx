import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { usePoke } from '../../hooks/usePoke';
import { Poke } from '../../types/poke';

import {
  Container,
  Content,
  Info,
  Input,
  InputArea,
  ListPokes,
  Pokeball,
  SearchIcon,
  Title,
} from './styles';

export function Home() {
  const { getPokes, isLoading } = usePoke();
  const [pokes, setPokes] = useState<Poke[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPokes() {
    if (loading) {
      return;
    }

    setLoading(true);
    const pokesData = await getPokes(offset);
    const newPokes: Poke[] = [...pokes, ...pokesData];

    setPokes(newPokes);
    setOffset(offset + 40);
    setLoading(false);
  }

  useEffect(() => {
    loadPokes();
  }, []);

  const renderItem = (poke: Poke) => <Card poke={poke} />;

  return (
    <Container>
      <Header />
      <Pokeball />
      <Content>
        <Title>Pokédex</Title>
        <Info>
          Search for Pokémon by name or using the National Pokédex number.
        </Info>
        <InputArea>
          <SearchIcon name="search" />
          <Input placeholder="What Pokémon are you looking for?" />
        </InputArea>

        {isLoading ? (
          <Loading />
        ) : (
          pokes.length !== 0 && (
            <ListPokes
              onEndReached={loadPokes}
              onEndReachedThreshold={0.5}
              data={pokes}
              initialNumToRender={40}
              maxToRenderPerBatch={100}
              updateCellsBatchingPeriod={10}
              removeClippedSubviews
              windowSize={80}
              keyExtractor={poke => poke.name}
              renderItem={({ item: poke }) => renderItem(poke)}
            />
          )
        )}
      </Content>
    </Container>
  );
}
