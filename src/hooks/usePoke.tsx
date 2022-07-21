import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { api } from '../services/api';
import { PokeDetail } from '../types/PokeDetail';
import { Poke } from '../types/poke';

type PokeProviderProps = {
  children: ReactNode;
};

type PokeContextData = {
  getPokes: (offset: number) => Promise<Poke[]>;
  getPokeDetail: (id: number) => Promise<PokeDetail>;
  isLoading: boolean;
};

const PokeContext = createContext({} as PokeContextData);

function PokeProvider({ children }: PokeProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const getPokes = useCallback(async (offset: number) => {
    try {
      const response = await api.get(`${offset}/40`);

      const pokeData: Poke[] = response.data;

      setIsLoading(false);
      return pokeData;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  }, []);

  const getPokeDetail = useCallback(async (id: number) => {
    try {
      const response = await api.get(`${id}`);
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
