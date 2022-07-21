import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { IconType } from '../../components/IconType';
import { PokeInfoData } from '../../components/PokeInfoData';
import { RoutesParamList } from '../../routes/app.routes';
import {
  cardBackgroundByType,
  typeBackgroundByType,
} from '../../utils/getColor';

import {
  Circle,
  Container,
  PointsLarge,
  PokeId,
  PokeImage,
  PokeImageArea,
  PokeInfo,
  PokeInfoArea,
  PokeName,
  PokeType,
  PokeTypeArea,
  PokeTypeName,
} from './styles';

type PokeDetailScreenNavigationProps = RouteProp<RoutesParamList, 'PokeDetail'>;

export function PokeDetail() {
  const {
    params: { poke },
  } = useRoute<PokeDetailScreenNavigationProps>();
  const deviceTheme = useColorScheme();

  const backgroundColor = cardBackgroundByType({
    pokeType: poke.types[0].type.name,
    theme: (deviceTheme && deviceTheme) || 'light',
  });

  function formattedId(id: number) {
    const idFormatted = `000${String(id)}`.slice(-3);

    return idFormatted;
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar backgroundColor={backgroundColor} />
      <BackButton />

      <PokeInfoArea>
        <PokeImageArea>
          <PokeImage
            source={{
              uri: poke.sprites.other['official-artwork'].front_default,
            }}
          />
          <Circle />
        </PokeImageArea>

        <PokeInfo>
          <PokeId>#{formattedId(poke.id)}</PokeId>
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
        </PokeInfo>

        <PointsLarge />
      </PokeInfoArea>

      <PokeInfoData pokeId={poke.id} />
    </Container>
  );
}
