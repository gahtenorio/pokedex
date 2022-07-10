import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonsArea, Container } from './styles';

import GenerationImg from '../../assets/generation.svg';
import SortImg from '../../assets/sort.svg';
import FilterImg from '../../assets/filter.svg';

export function Header() {
  return (
    <Container>
      <ButtonsArea>
        <TouchableOpacity activeOpacity={0.5}>
          <GenerationImg />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <SortImg />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <FilterImg />
        </TouchableOpacity>
      </ButtonsArea>
    </Container>
  );
}
