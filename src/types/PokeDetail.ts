import { PokeAbility } from './pokeAbility';
import { PokeEvolution } from './pokeEvolution';
import { PokelocationAreaEncounters } from './pokelocationAreaEncounters';
import { PokeStatus } from './pokeStatus';
import { PokeType, PokeTypes } from './pokeType';

export type PokeDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  capture_rate: number;
  growth_rate: string;
  base_experience: number;
  poke_species: string;
  egg_groups: Array<string>;
  evolution_chain: PokeEvolution;
  types: PokeTypes[];
  abilities: PokeAbility[];
  stats: PokeStatus[];
  sprites: string;
  location_area_encounters: PokelocationAreaEncounters[];
  weakness: PokeType[];
  strongness: PokeType[];
};
