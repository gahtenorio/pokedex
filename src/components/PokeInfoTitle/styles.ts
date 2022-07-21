import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type TitleProps = {
  color: string;
};

export const Title = styled.Text<TitleProps>`
  color: ${({ color }) => color};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
`;
