import React from 'react';

import Bug from '../../assets/icons/bug.svg';
import Dark from '../../assets/icons/dark.svg';
import Dragon from '../../assets/icons/dragon.svg';
import Electric from '../../assets/icons/electric.svg';
import Fairy from '../../assets/icons/fairy.svg';
import Fighting from '../../assets/icons/fighting.svg';
import Fire from '../../assets/icons/fire.svg';
import Flying from '../../assets/icons/flying.svg';
import Ghost from '../../assets/icons/ghost.svg';
import Grass from '../../assets/icons/grass.svg';
import Ground from '../../assets/icons/ground.svg';
import Ice from '../../assets/icons/ice.svg';
import Normal from '../../assets/icons/normal.svg';
import Poison from '../../assets/icons/poison.svg';
import Psychic from '../../assets/icons/psychic.svg';
import Rock from '../../assets/icons/rock.svg';
import Steel from '../../assets/icons/steel.svg';
import Water from '../../assets/icons/water.svg';

type InconTypeProps = {
  type:
    | string
    | 'bug'
    | 'dark'
    | 'fire'
    | 'dragon'
    | 'electric'
    | 'fairy'
    | 'fighting'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'water';
};

export function IconType({ type }: InconTypeProps) {
  switch (type) {
    case 'bug':
      return <Bug width={15} height={15} />;
    case 'dark':
      return <Dark width={15} height={15} />;
    case 'dragon':
      return <Dragon width={15} height={15} />;
    case 'electric':
      return <Electric width={15} height={15} />;
    case 'fairy':
      return <Fairy width={15} height={15} />;
    case 'fighting':
      return <Fighting width={15} height={15} />;
    case 'fire':
      return <Fire width={15} height={15} />;
    case 'flying':
      return <Flying width={15} height={15} />;
    case 'ghost':
      return <Ghost width={15} height={15} />;
    case 'grass':
      return <Grass width={15} height={15} />;
    case 'ground':
      return <Ground width={15} height={15} />;
    case 'ice':
      return <Ice width={15} height={15} />;
    case 'normal':
      return <Normal width={15} height={15} />;
    case 'poison':
      return <Poison width={15} height={15} />;
    case 'psychic':
      return <Psychic width={15} height={15} />;
    case 'rock':
      return <Rock width={15} height={15} />;
    case 'steel':
      return <Steel width={15} height={15} />;
    case 'water':
      return <Water width={15} height={15} />;
    default:
      return null;
  }
}
