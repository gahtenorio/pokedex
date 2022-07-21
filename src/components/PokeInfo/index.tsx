import React, { useEffect, useState } from 'react';
import { usePoke } from '../../hooks/usePoke';
import { PokeDetail } from '../../types/PokeDetail';
import { About } from '../About';
import { Evolution } from '../Evolution';
import { Loading } from '../Loading';
import { Stats } from '../Stats';

type PokeInfoProps = {
  content: 'about' | 'stats' | 'evolution';
  pokeId: number;
};

export function PokeInfo({ content, pokeId }: PokeInfoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [poke, setPoke] = useState<PokeDetail>();
  const { getPokeDetail } = usePoke();

  async function loadPokeData() {
    const pokeData = await getPokeDetail(pokeId);
    setPoke(pokeData);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokeData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  switch (content) {
    case 'about':
      return <About poke={poke} />;
    case 'stats':
      return <Stats poke={poke} />;
    case 'evolution':
      return <Evolution poke={poke} />;
    default:
      return <About poke={poke} />;
  }
}
