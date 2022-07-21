import React from 'react';
import { useColorScheme, View } from 'react-native';
import { PokeDetail } from '../../types/PokeDetail';
import { typeBackgroundByType } from '../../utils/getColor';
import { IconType } from '../IconType';
import { PokeInfoTitle } from '../PokeInfoTitle';

import {
  Container,
  IconArea,
  InfoArea,
  PokeInfoTitleArea,
  Title,
  Value,
} from './styles';

type AboutProps = {
  poke: PokeDetail;
};

export function About({ poke }: AboutProps) {
  const deviceTheme = useColorScheme();

  console.log(poke.weakness);

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

      <InfoArea>
        <Title>Species</Title>
        <Value>{poke.poke_species}</Value>
      </InfoArea>

      <InfoArea>
        <Title>Height</Title>
        <Value>{poke.height / 10}m</Value>
      </InfoArea>

      <InfoArea>
        <Title>Weight</Title>
        <Value>{poke.weight / 10}kg</Value>
      </InfoArea>

      <InfoArea>
        <Title>Abilites</Title>
        <View>
          {poke.abilities.map((abilites, index) => (
            <Value key={abilites.ability.name} isHidden={abilites.is_hidden}>
              {!abilites.is_hidden
                ? `${index + 1}. ${abilites.ability.name}`
                : `${abilites.ability.name} (hidden ability)`}
            </Value>
          ))}
        </View>
      </InfoArea>

      <InfoArea>
        <Title>Weaknesses</Title>
        {poke.weakness.map(weakness => (
          <IconArea
            key={weakness.name}
            backgroundColor={typeBackgroundByType({
              pokeType: weakness.name,
              theme: (deviceTheme && deviceTheme) || 'light',
            })}
          >
            <IconType type={weakness.name} />
          </IconArea>
        ))}
      </InfoArea>

      <PokeInfoTitleArea>
        <PokeInfoTitle
          color={typeBackgroundByType({
            pokeType: poke.types[0].type.name,
            theme: (deviceTheme && deviceTheme) || 'light',
          })}
        >
          Training
        </PokeInfoTitle>
      </PokeInfoTitleArea>
    </Container>
  );
}
