import React from 'react';
import { useColorScheme } from 'react-native';
import themes from '../../themes';
import { PokeDetail } from '../../types/PokeDetail';
import { PokeType } from '../../types/pokeType';
import { StatsName } from '../../utils/enums/StatsName';
import { typeBackgroundByType } from '../../utils/getColor';
import { IconType } from '../IconType';
import { PokeInfoTitle } from '../PokeInfoTitle';

import {
  Container,
  EffectivenessArea,
  EffectivenessText,
  IconArea,
  InfoArea,
  PokeInfoTitleArea,
  PokeTypesArea,
  StatusBar,
  Subtitle,
  Title,
  Value,
} from './styles';

type StatsProps = {
  poke: PokeDetail;
};

type PokeWeaknessAndStrongness = {
  name: string | PokeType;
  type: 'weakness' | 'strongness';
};

export function Stats({ poke }: StatsProps) {
  const deviceTheme = useColorScheme();

  const statsValues: number[] = poke.stats.map(stats => stats.base_stat);

  const totalStats = statsValues.reduce((sum, i) => {
    return sum + i;
  });

  const pokesTypes = [
    'bug',
    'dark',
    'fire',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];

  const pokeWeakness: PokeWeaknessAndStrongness[] = poke.weakness.map(
    weakness => {
      return {
        name: weakness.name,
        type: 'weakness',
      };
    },
  );

  const pokeStrongness: PokeWeaknessAndStrongness[] = poke.strongness.map(
    strongness => {
      return {
        name: strongness.name,
        type: 'strongness',
      };
    },
  );

  const pokeWeaknessAndStrongness = [...pokeWeakness, ...pokeStrongness];

  return (
    <Container>
      <PokeInfoTitle
        color={typeBackgroundByType({
          pokeType: poke.types[0].type.name,
          theme: (deviceTheme && deviceTheme) || 'light',
        })}
      >
        Base Stats
      </PokeInfoTitle>

      {poke.stats.map(stats => (
        <InfoArea key={stats.stat.name}>
          <Title>{StatsName[stats.stat.name]}</Title>
          <Value>{stats.base_stat}</Value>
          <StatusBar
            value={stats.base_stat}
            backgroundColor={typeBackgroundByType({
              pokeType: poke.types[0].type.name,
              theme: (deviceTheme && deviceTheme) || 'light',
            })}
          />
        </InfoArea>
      ))}
      <InfoArea>
        <Title>Total</Title>
        <Value
          style={{
            fontFamily: themes.light.fonts.roboto_bold,
          }}
        >
          {totalStats}
        </Value>
      </InfoArea>

      <PokeInfoTitleArea>
        <PokeInfoTitle
          color={typeBackgroundByType({
            pokeType: poke.types[0].type.name,
            theme: (deviceTheme && deviceTheme) || 'light',
          })}
        >
          Type Defenses
        </PokeInfoTitle>
      </PokeInfoTitleArea>

      <Subtitle>The effectiveness off each type on {poke.name}</Subtitle>

      <PokeTypesArea>
        {pokesTypes.map(type => (
          <EffectivenessArea key={type}>
            <IconArea
              backgroundColor={typeBackgroundByType({
                pokeType: type,
                theme: (deviceTheme && deviceTheme) || 'light',
              })}
            >
              <IconType type={type} />
            </IconArea>
            <EffectivenessText
              show={pokeWeaknessAndStrongness.some(
                typeWeaknessOrStrongness =>
                  typeWeaknessOrStrongness.name === type,
              )}
            >
              {pokeWeakness.some(weakness => weakness.name === type) ? 2 : '½'}
            </EffectivenessText>
          </EffectivenessArea>
        ))}
      </PokeTypesArea>
    </Container>
  );
}
