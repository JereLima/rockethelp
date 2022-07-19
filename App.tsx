import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Login } from "./src/pages";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Login /> : <Loading />}
    </NativeBaseProvider>
  );
}