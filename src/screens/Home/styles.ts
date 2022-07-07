import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import PokeballImg from '../../assets/Pokeball.svg';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 40px 0;
`;

export const Pokeball = styled(PokeballImg)`
  position: absolute;
  top: 0;
  width: 100%;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Info = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text_ternary};
`;
