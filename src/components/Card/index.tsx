import React from 'react';
import { useColorScheme } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { navigationProps } from '../../routes/app.routes';
import {
  cardBackgroundByType,
  typeBackgroundByType,
} from '../../utils/getColor';
import { IconType } from '../IconType';
import {
  Container,
  Points,
  Pokeball,
  PokeDetails,
  PokeId,
  PokeImage,
  PokeName,
  PokeType,
  PokeTypeArea,
  PokeTypeName,
} from './styles';
import { Poke } from '../../types/poke';
import { formattedId } from '../../utils/formatId';

type CardProps = {
  poke: Poke;
};

export function Card({ poke }: CardProps) {
  const navigation = useNavigation<navigationProps>();
  const deviceTheme = useColorScheme();

  function handleNavigateToDetail() {
    navigation.navigate('PokeDetail', {
      poke,
    });
  }

  return (
    <Container
      style={{
        backgroundColor: cardBackgroundByType({
          pokeType: poke?.types[0].type.name,
          theme: (deviceTheme && deviceTheme) || 'light',
        }),
      }}
      activeOpacity={0.7}
      onPress={handleNavigateToDetail}
    >
      <Points />

      <PokeDetails>
        <PokeId>{formattedId(poke.id)}</PokeId>
        <PokeName>{poke.name}</PokeName>
        <PokeTypeArea>
          {poke.types.map(types => (
            <PokeType
              key={types.type.name}
              style={{
                backgroundColor: typeBackgroundByType({
                  pokeType: types.type.name,
                  theme: (deviceTheme && deviceTheme) || 'light',
                }),
              }}
            >
              <IconType type={types.type.name} />
              <PokeTypeName>{types.type.name}</PokeTypeName>
            </PokeType>
          ))}
        </PokeTypeArea>
      </PokeDetails>

      <PokeImage
        source={{ uri: poke.sprites.other['official-artwork'].front_default }}
        resizeMode="cover"
      />

      <Pokeball />
    </Container>
  );
}
