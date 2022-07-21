import React from 'react';
import { useColorScheme } from 'react-native';
import { PokeDetail } from '../../types/PokeDetail';
import { typeBackgroundByType } from '../../utils/getColor';
import { PokeInfoTitle } from '../PokeInfoTitle';

import { Container } from './styles';

type EvolutionProps = {
  poke: PokeDetail;
};

export function Evolution({ poke }: EvolutionProps) {
  const deviceTheme = useColorScheme();

  return (
    <Container>
      <PokeInfoTitle
        color={typeBackgroundByType({
          pokeType: poke.types[0].type.name,
          theme: (deviceTheme && deviceTheme) || 'light',
        })}
      >
        Pokédex Data
      </PokeInfoTitle>
    </Container>
  );
}
