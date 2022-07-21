import React, { useState } from 'react';
import { PokeInfo } from '../PokeInfo';

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTitleArea,
  Pokeball,
} from './styles';

type PokeInfoDataProps = {
  pokeId: number;
};

export function PokeInfoData({ pokeId }: PokeInfoDataProps) {
  const [contentSelected, setContentSelected] = useState<
    'about' | 'stats' | 'evolution'
  >('about');

  function handleSelectContent(content: 'about' | 'stats' | 'evolution') {
    setContentSelected(content);
  }

  return (
    <Container>
      <Header>
        <HeaderTitleArea onPress={() => handleSelectContent('about')}>
          <HeaderTitle contentSelected={contentSelected === 'about'}>
            About
          </HeaderTitle>
          <Pokeball contentSelected={contentSelected === 'about'} />
        </HeaderTitleArea>

        <HeaderTitleArea onPress={() => handleSelectContent('stats')}>
          <HeaderTitle contentSelected={contentSelected === 'stats'}>
            Stats
          </HeaderTitle>
          <Pokeball contentSelected={contentSelected === 'stats'} />
        </HeaderTitleArea>

        <HeaderTitleArea onPress={() => handleSelectContent('evolution')}>
          <HeaderTitle contentSelected={contentSelected === 'evolution'}>
            Evolution
          </HeaderTitle>
          <Pokeball contentSelected={contentSelected === 'evolution'} />
        </HeaderTitleArea>
      </Header>

      <Content>
        <PokeInfo content={contentSelected} pokeId={pokeId} />
      </Content>
    </Container>
  );
}
