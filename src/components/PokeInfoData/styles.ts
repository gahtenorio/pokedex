import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import PokeballImg from '../../assets/PokeballHeader.svg';

type contentSelected = {
  contentSelected: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 48px 10px;
`;

export const HeaderTitleArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  align-items: center;
`;

export const HeaderTitle = styled.Text<contentSelected>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_secondary};
  opacity: 0.7;

  ${props =>
    props.contentSelected &&
    css`
      font-family: ${({ theme }) => theme.fonts.roboto_bold};
      opacity: 1;
    `}
`;

export const Pokeball = styled(PokeballImg)<contentSelected>`
  position: absolute;
  top: -14px;
  opacity: 0;

  ${props =>
    props.contentSelected &&
    css`
      opacity: 1;
    `}
`;

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
