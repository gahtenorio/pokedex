import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding-left: 24px;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'arrow-left',
})`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.background};
`;
