import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import PokeballImg from '../../assets/Pokeball.svg';
import { PokeList } from '../../types/pokeList';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 34px 24px 0;
`;

export const Pokeball = styled(PokeballImg)`
  position: absolute;
  top: 0;
  width: 100%;
  align-self: center;
  z-index: -99;
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

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.input_background};
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#747474',
})`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const SearchIcon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_ternary};
  margin-right: 10px;
`;

export const ListPokes = styled(
  FlatList as new (props: FlatListProps<PokeList>) => FlatList<PokeList>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 30,
  },
})``;
