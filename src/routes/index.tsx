// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Details, Home, Login, Register } from "../pages";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { orderId: string };
  Register: undefined;
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type RegisterProps = NativeStackScreenProps<
  RootStackParamList,
  "Register"
>;
export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const logged = true;

function AppRoutes() {
  const authorized = (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );

  const unauthorized = (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );

  return <NavigationContainer>{authorized}</NavigationContainer>;
}

export default AppRoutes;
