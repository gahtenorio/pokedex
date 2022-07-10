import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { api } from '../services/api';
import { PokeDetail } from '../types/PokeDetail';
import { PokeList } from '../types/pokeList';

type PokeProviderProps = {
  children: ReactNode;
};

type PokeContextData = {
  getPokes: (offset: number) => Promise<PokeList[]>;
  getPokeDetail: (name: string) => Promise<PokeDetail>;
  isLoading: boolean;
};

const PokeContext = createContext({} as PokeContextData);

function PokeProvider({ children }: PokeProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const getPokes = useCallback(async (offset: number) => {
    try {
      const response = await api.get('pokemon', {
        params: {
          offset,
          limit: 40,
        },
      });

      setIsLoading(false);
      return response.data.results;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  }, []);

  const getPokeDetail = useCallback(async (name: string) => {
    try {
      const response = await api.get(`pokemon/${name}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }, []);

  return (
    <PokeContext.Provider
      value={{
        getPokes,
        getPokeDetail,
        isLoading,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}

function usePoke() {
  const context = useContext(PokeContext);

  return context;
}

export { PokeProvider, usePoke };
