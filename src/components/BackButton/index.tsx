import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { BackIcon, Container } from './styles';

export function BackButton() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <BackIcon />
    </Container>
  );
}
