import { PokeAbility } from './pokeAbility';
import { PokeMove } from './pokeMove';
import { PokeSprites } from './pokeSprites';
import { PokeStatus } from './pokeStatus';
import { PokeType } from './pokeType';

export type PokeDetail = {
  id: string;
  name: string;
  types: Array<{
    type: PokeType;
  }>;
  abilities: Array<{
    ability: PokeAbility;
  }>;
  moves: Array<{
    move: PokeMove;
  }>;
  stats: PokeStatus[];
  sprites: PokeSprites;
};
