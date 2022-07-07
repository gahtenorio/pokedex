import React from 'react';

import { Container, Content, Info, Pokeball, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Pokeball />
      <Content>
        <Title>Pokédex</Title>
        <Info>
          Procure Pokémon pelo nome ou usando o número National Pokédex
        </Info>
      </Content>
    </Container>
  );
}
