import React, { useEffect, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { usePoke } from '../../hooks/usePoke';
import themes from '../../themes';
import { PokeDetail } from '../../types/PokeDetail';
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

type CardProps = {
  name: string;
};

export function Card({ name }: CardProps) {
  const { getPokeDetail } = usePoke();
  const deviceTheme = useColorScheme();
  const [poke, setPoke] = useState<PokeDetail>();
  const [loading, setLoading] = useState(true);

  const theme = (deviceTheme && themes[deviceTheme]) || themes.light;

  const cardBackgroundByType = Object.freeze({
    bug: theme.colors.background_type_bug,
    dark: theme.colors.background_type_dark,
    dragon: theme.colors.background_type_dragon,
    electric: theme.colors.background_type_electric,
    fairy: theme.colors.background_type_fairy,
    fighting: theme.colors.background_type_fighting,
    flying: theme.colors.background_type_flying,
    ghost: theme.colors.background_type_ghost,
    grass: theme.colors.background_type_grass,
    ground: theme.colors.background_type_ground,
    ice: theme.colors.background_type_ice,
    normal: theme.colors.background_type_normal,
    poison: theme.colors.background_type_poison,
    psychic: theme.colors.background_type_psychic,
    rock: theme.colors.background_type_rock,
    steel: theme.colors.background_type_steel,
    water: theme.colors.background_type_water,
    fire: theme.colors.background_type_fire,
  });

  const TypeBackgroundByType = Object.freeze({
    bug: theme.colors.type_bug,
    dark: theme.colors.type_dark,
    dragon: theme.colors.type_dragon,
    eletric: theme.colors.type_electric,
    fairy: theme.colors.type_fighting,
    flying: theme.colors.type_flying,
    ghost: theme.colors.type_ghost,
    grass: theme.colors.type_grass,
    ground: theme.colors.type_ground,
    ice: theme.colors.type_ice,
    normal: theme.colors.type_normal,
    poison: theme.colors.type_poison,
    psychic: theme.colors.type_psychic,
    rock: theme.colors.type_rock,
    steel: theme.colors.type_steel,
    water: theme.colors.type_water,
    fire: theme.colors.type_fire,
  });

  function handleNavigateToDetail() {
    console.log(poke);
  }

  async function loadPokeDetail() {
    const pokeData = await getPokeDetail(name);
    setPoke(pokeData);
    setLoading(false);
  }

  useEffect(() => {
    loadPokeDetail();
  }, []);

  if (loading) {
    return <View />;
  }

  return (
    <Container
      style={{
        backgroundColor: `${cardBackgroundByType[poke?.types[0].type.name]}`,
      }}
      activeOpacity={0.7}
      onPress={handleNavigateToDetail}
    >
      <Points />

      <PokeDetails>
        <PokeId>#{poke.id}</PokeId>
        <PokeName>{name}</PokeName>
        <PokeTypeArea>
          {poke.types.map(types => (
            <PokeType
              key={types.type.name}
              style={{
                backgroundColor: `${TypeBackgroundByType[types.type.name]}`,
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
