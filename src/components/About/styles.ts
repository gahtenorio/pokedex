import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px;
`;

export const InfoArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_medium};
  color: ${({ theme }) => theme.colors.text_primary};
  width: 35%;
`;

type ValueProps = {
  isHidden?: boolean;
};

export const Value = styled.Text<ValueProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_ternary};
  text-transform: capitalize;
  max-width: 220px;

  ${({ isHidden }) =>
    isHidden &&
    css`
      font-size: ${RFValue(12)}px;
      font-family: ${({ theme }) => theme.fonts.roboto_medium};
    `}
`;

type IconAreaProps = {
  backgroundColor: string;
};

export const IconArea = styled.View<IconAreaProps>`
  padding: 5px;
  border-radius: 3px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-right: 10px;
`;

export const PokeInfoTitleArea = styled.View`
  margin-top: 20px;
`;
