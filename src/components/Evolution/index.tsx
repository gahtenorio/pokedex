import React from 'react';
import { useColorScheme } from 'react-native';
import { PokeDetail } from '../../types/PokeDetail';
import { typeBackgroundByType } from '../../utils/getColor';
import { PokeInfoTitle } from '../PokeInfoTitle';

import {
  ArrowRight,
  Container,
  Pokeball,
  PokeDetailArea,
  PokeEvolutionArea,
  PokeImage,
  PokeImageArea,
  PokeName,
} from './styles';

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
        Evolution Chart
      </PokeInfoTitle>

      <PokeEvolutionArea>
        <PokeDetailArea>
          <PokeImageArea>
            <PokeImage
              source={{
                uri: poke.evolution_chain.chain.species.sprite,
              }}
            />
            <Pokeball />
          </PokeImageArea>
          <PokeName>{poke.evolution_chain.chain.species.name}</PokeName>
        </PokeDetailArea>

        {!!poke.evolution_chain.chain.evolves_to[0].species.sprite && (
          <>
            <ArrowRight />

            <PokeDetailArea>
              <PokeImageArea>
                <PokeImage
                  source={{
                    uri: poke.evolution_chain.chain.evolves_to[0].species
                      .sprite,
                  }}
                />
                <Pokeball />
              </PokeImageArea>
              <PokeName>
                {poke.evolution_chain.chain.evolves_to[0].species.name}
              </PokeName>
            </PokeDetailArea>
          </>
        )}
      </PokeEvolutionArea>

      {!!poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species
        .name && (
        <PokeEvolutionArea>
          <PokeDetailArea>
            <PokeImageArea>
              <PokeImage
                source={{
                  uri: poke.evolution_chain.chain.evolves_to[0].species.sprite,
                }}
              />
              <Pokeball />
            </PokeImageArea>
            <PokeName>
              {poke.evolution_chain.chain.evolves_to[0].species.name}
            </PokeName>
          </PokeDetailArea>

          <ArrowRight />

          <PokeDetailArea>
            <PokeImageArea>
              <PokeImage
                source={{
                  uri: poke.evolution_chain.chain.evolves_to[0].evolves_to[0]
                    .species.sprite,
                }}
              />
              <Pokeball />
            </PokeImageArea>
            <PokeName>
              {
                poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species
                  .name
              }
            </PokeName>
          </PokeDetailArea>
        </PokeEvolutionArea>
      )}
    </Container>
  );
}
