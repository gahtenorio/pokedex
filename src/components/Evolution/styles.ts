import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import PokeballEvolutionImage from '../../assets/PokeballEvolution.svg';

export const Container = styled.View`
  flex: 1;
  padding: 40px;
`;

export const PokeDetailArea = styled.View`
  align-items: center;
`;

export const PokeName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_primary};
  text-transform: capitalize;
`;

export const PokeEvolutionArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ArrowRight = styled(Feather).attrs({
  name: 'arrow-right',
})`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.arrow_evolution};
`;

export const PokeImageArea = styled.View`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const PokeImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Pokeball = styled(PokeballEvolutionImage)`
  position: absolute;
  z-index: -10;
`;
