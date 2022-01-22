import { useState } from "react";
import { createStore, combineReducers } from "redux";
import { StyleSheet, Text, View } from "react-native";

import userReducer from "./store/reducers/user";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/Navigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
  });
};

import MainMenu from "./components/menu/MainMenu";

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  } else {
    return <Navigator />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
