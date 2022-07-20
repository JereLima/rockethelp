import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Home, Login, Details, Register } from "./src/pages";
import { LogBox } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components";
import AppRoutes, { AuthorizedRoutes, UnauthorizedRoutes } from "./src/routes";
import { userStore } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreLogs([
  "Warning: Async Storage has been extracted from react-native core",
]);

export default function App() {
  const { user } = userStore();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent barStyle="light-content" />
      {fontsLoaded ? (
        <NavigationContainer>
          {user.uid ? AuthorizedRoutes : UnauthorizedRoutes}
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}
