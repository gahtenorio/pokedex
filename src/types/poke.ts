import { PokeSprites } from './pokeSprites';
import { PokeTypes } from './pokeType';

export type Poke = {
  id: number;
  name: string;
  sprites: PokeSprites;
  types: PokeTypes[];
  height: number;
  weight: number;
  weakness: PokeTypes[];
};
