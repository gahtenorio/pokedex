import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CircleImg from '../../assets/Circle.svg';
import PointsLargeImg from '../../assets/pointsLarge.svg';

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
})<ContainerProps>`
  background-color: ${props => props.backgroundColor};
  padding-top: 20px;
`;

export const PokeInfoArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0 30px 20px;
`;

export const PokeInfo = styled.View`
  margin-left: 25px;
`;

export const PointsLarge = styled(PointsLargeImg)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -10;
`;

export const PokeImageArea = styled.View``;

export const Circle = styled(CircleImg).attrs({
  width: 130,
  height: 130,
})`
  position: absolute;
  z-index: -99;
`;

export const PokeImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const PokeId = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const PokeName = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_bold};
  color: ${({ theme }) => theme.colors.text_secondary};
  text-transform: capitalize;
`;

export const PokeTypeArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
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
