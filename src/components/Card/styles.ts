import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import PokeBallImg from '../../assets/pokeballCard.svg';
import PointsImg from '../../assets/points.svg';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 115px;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Pokeball = styled(PokeBallImg)`
  position: absolute;
  right: 0;
  z-index: -2;
`;

export const Points = styled(PointsImg)`
  position: absolute;
  left: 24%;
  top: 5px;
`;

export const PokeDetails = styled.View``;

export const PokeId = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const PokeName = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_secondary};
  text-transform: capitalize;
`;

export const PokeTypeArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PokeType = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  border-radius: 3px;
  min-width: 60px;
  margin-right: 5px;
  justify-content: center;
`;

export const PokeTypeName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-left: 5px;
  line-height: ${RFValue(14)}px;
  text-transform: capitalize;
`;

export const PokeImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: -34px;
`;
