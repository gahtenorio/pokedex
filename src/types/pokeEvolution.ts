export type PokeEvolution = {
  chain: {
    species: {
      name: string;
      sprite: string;
    };
    evolves_to: Array<{
      species: {
        name: string;
        sprite: string;
      };
      evolves_to: Array<{
        species: {
          name: string;
          sprite: string;
        };
      }>;
    }>;
  };
};
