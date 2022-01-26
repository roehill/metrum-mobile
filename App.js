import { useReducer, useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import userReducer from "./store/reducers/user";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/Navigator";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
  });
};

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
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
};

const styles = StyleSheet.create({});

export default App;
