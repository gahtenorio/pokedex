import themes from '../themes';

type BackgroundByType = {
  pokeType: string;
  theme?: 'light' | 'dark';
};

export const cardBackgroundByType = ({
  pokeType,
  theme = 'light',
}: BackgroundByType) => {
  const background = Object.freeze({
    bug: themes[theme].colors.background_type_bug,
    dark: themes[theme].colors.background_type_dark,
    dragon: themes[theme].colors.background_type_dragon,
    electric: themes[theme].colors.background_type_electric,
    fairy: themes[theme].colors.background_type_fairy,
    fighting: themes[theme].colors.background_type_fighting,
    flying: themes[theme].colors.background_type_flying,
    ghost: themes[theme].colors.background_type_ghost,
    grass: themes[theme].colors.background_type_grass,
    ground: themes[theme].colors.background_type_ground,
    ice: themes[theme].colors.background_type_ice,
    normal: themes[theme].colors.background_type_normal,
    poison: themes[theme].colors.background_type_poison,
    psychic: themes[theme].colors.background_type_psychic,
    rock: themes[theme].colors.background_type_rock,
    steel: themes[theme].colors.background_type_steel,
    water: themes[theme].colors.background_type_water,
    fire: themes[theme].colors.background_type_fire,
  });

  return background[pokeType];
};

export const typeBackgroundByType = ({
  pokeType,
  theme = 'light',
}: BackgroundByType) => {
  const background = Object.freeze({
    bug: themes[theme].colors.type_bug,
    dark: themes[theme].colors.type_dark,
    dragon: themes[theme].colors.type_dragon,
    electric: themes[theme].colors.type_electric,
    fairy: themes[theme].colors.type_fairy,
    fighting: themes[theme].colors.type_fighting,
    flying: themes[theme].colors.type_flying,
    ghost: themes[theme].colors.type_ghost,
    grass: themes[theme].colors.type_grass,
    ground: themes[theme].colors.type_ground,
    ice: themes[theme].colors.type_ice,
    normal: themes[theme].colors.type_normal,
    poison: themes[theme].colors.type_poison,
    psychic: themes[theme].colors.type_psychic,
    rock: themes[theme].colors.type_rock,
    steel: themes[theme].colors.type_steel,
    water: themes[theme].colors.type_water,
    fire: themes[theme].colors.type_fire,
  });

  return background[pokeType];
};
