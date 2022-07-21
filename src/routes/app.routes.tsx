import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { PokeDetail } from '../screens/PokeDetail';
import { Poke } from '../types/poke';

export type RoutesParamList = {
  Home: undefined;
  PokeDetail: { poke: Poke };
};

export type navigationProps = NativeStackNavigationProp<RoutesParamList>;

const Stack = createNativeStackNavigator<RoutesParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokeDetail" component={PokeDetail} />
    </Stack.Navigator>
  );
}
