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
  width: 25%;
`;

type ValueProps = {
  isHidden?: boolean;
};

export const Value = styled.Text<ValueProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_ternary};

  text-transform: capitalize;
`;

type StatusBarProps = {
  value: number;
  backgroundColor: string;
};

export const StatusBar = styled.View<StatusBarProps>`
  height: 4px;
  width: ${({ value }) => value}px;
  border-radius: 2px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-left: 20px;
`;

type IconAreaProps = {
  backgroundColor: string;
};

export const IconArea = styled.View<IconAreaProps>`
  padding: 5px;
  border-radius: 3px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const PokeInfoTitleArea = styled.View`
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_ternary};
  margin-top: 20px;
`;

export const PokeTypesArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const EffectivenessArea = styled.View`
  margin: 0 5px;
  align-items: center;
`;

type EffectivenessTextProps = {
  show: boolean;
};

export const EffectivenessText = styled.Text<EffectivenessTextProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color: ${({ theme }) => theme.colors.text_ternary};
  margin: 5px 0 20px;
  opacity: 0;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;
