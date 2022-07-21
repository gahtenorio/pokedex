import React, { ReactNode } from 'react';
import { Title } from './styles';

type PokeInfoTitleProps = {
  children: ReactNode;
  color: string;
};

export function PokeInfoTitle({ color, children }: PokeInfoTitleProps) {
  return <Title color={color}>{children}</Title>;
}
