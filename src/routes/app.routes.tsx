import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "../screens/Home";

export type RoutesParamList = {
  Home: undefined;
};

export type navigationProps = NativeStackNavigationProp<RoutesParamList>;

const Stack = createNativeStackNavigator<RoutesParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
