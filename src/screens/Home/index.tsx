import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { usePoke } from '../../hooks/usePoke';
import { PokeList } from '../../types/pokeList';

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
  const [pokes, setPokes] = useState<PokeList[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPokes() {
    if (loading) {
      return;
    }

    setLoading(true);
    const pokesData = await getPokes(offset);
    const newPokes: PokeList[] = [...pokes, ...pokesData];

    setPokes(newPokes);
    setOffset(offset + 40);
    setLoading(false);
  }

  useEffect(() => {
    loadPokes();
  }, []);

  if (isLoading) {
    return null;
  }

  const renderItem = (poke: PokeList) => <Card name={poke.name} />;

  return (
    <Container>
      <Header />
      <Pokeball />
      <Content>
        <Title>Pokédex</Title>
        <Info>
          Pesquise um Pokémon pelo nome ou usando o número National Pokédex
        </Info>
        <InputArea>
          <SearchIcon name="search" />
          <Input placeholder="Qual Pokémon você está procurando?" />
        </InputArea>

        {pokes.length !== 0 && (
          <ListPokes
            onEndReached={loadPokes}
            onEndReachedThreshold={0.4}
            data={pokes}
            initialNumToRender={40}
            maxToRenderPerBatch={100}
            updateCellsBatchingPeriod={10}
            removeClippedSubviews
            windowSize={80}
            keyExtractor={poke => poke.name}
            renderItem={({ item: poke }) => renderItem(poke)}
          />
        )}
      </Content>
    </Container>
  );
}
