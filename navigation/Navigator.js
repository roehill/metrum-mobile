import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainMenu from "../components/menu/MainMenu";
import ChordsScreen from "../screens/chords/ChordsScreen";
import ScalesScreen from "../screens/scales/ScalesScreen";

const Navigator = createStackNavigator(
  {
    MainMenu: {
      screen: MainMenu,
    },
    Chords: {
      screen: ChordsScreen,
    },
    Scales: {
      screen: ScalesScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(Navigator);
