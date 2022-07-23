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

  let currentState = poke.stats[0];

  poke.stats.map(stats => {
    if (stats.base_stat > currentState.base_stat) {
      currentState = stats;
    }
  });

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
            <Value
              key={abilites.ability.name.replace('-', ' ')}
              isHidden={abilites.is_hidden}
            >
              {!abilites.is_hidden
                ? `${index + 1}. ${abilites.ability.name}`
                : `${abilites.ability.name.replace('-', ' ')} (hidden ability)`}
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

      <InfoArea>
        <Title>Ev Yield</Title>
        <Value>{currentState.stat.name.replace('-', ' ')}</Value>
      </InfoArea>

      <InfoArea>
        <Title>Catch Rate</Title>
        <Value>{poke.capture_rate}</Value>
      </InfoArea>

      <InfoArea>
        <Title>Base Exp</Title>
        <Value>{poke.base_experience}</Value>
      </InfoArea>

      <InfoArea>
        <Title>Growth Rate</Title>
        <Value>{poke.growth_rate.replace('-', ' ')}</Value>
      </InfoArea>

      <PokeInfoTitleArea>
        <PokeInfoTitle
          color={typeBackgroundByType({
            pokeType: poke.types[0].type.name,
            theme: (deviceTheme && deviceTheme) || 'light',
          })}
        >
          Breeding
        </PokeInfoTitle>
      </PokeInfoTitleArea>

      <InfoArea>
        <Title>Egg Groups</Title>
        {poke.egg_groups.map((eggGroup, index) => (
          <Value key={eggGroup}>
            {eggGroup.replace(/[0-9]/g, '')}
            {poke.egg_groups.length !== index + 1 && ', '}
          </Value>
        ))}
      </InfoArea>

      {poke.location_area_encounters.length > 0 && (
        <>
          <PokeInfoTitleArea>
            <PokeInfoTitle
              color={typeBackgroundByType({
                pokeType: poke.types[0].type.name,
                theme: (deviceTheme && deviceTheme) || 'light',
              })}
            >
              Location
            </PokeInfoTitle>
          </PokeInfoTitleArea>

          {poke.location_area_encounters.map(location => {
            const locationArea = location.location_area.url.replace(
              'https://pokeapi.co/api/v2/location-area/',
              '',
            );
            return (
              <InfoArea key={location.location_area.url}>
                <Title>{locationArea.replace('/', '')}</Title>
                <Value>
                  (
                  {location.version_details.map((versionDetails, index) => (
                    <Value key={versionDetails.version.name}>
                      {versionDetails.version.name}
                      {location.version_details.length !== index + 1 && '/'}
                    </Value>
                  ))}
                  )
                </Value>
              </InfoArea>
            );
          })}
        </>
      )}
    </Container>
  );
}
