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
`;

export const Info = styled.Text``;
