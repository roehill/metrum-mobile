import { View, Text, StyleSheet } from "react-native";

import Tile from "./Tile";

const MainMenu = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuSelect}>Select required tool</Text>
      <View style={styles.tilesContainer}>
        <Tile
          onNavigate={() => {
            props.navigation.navigate({ routeName: "Chords" });
          }}
          title="CHORDS"
        />
        <Tile
          onNavigate={() => {
            props.navigation.navigate({ routeName: "Scales" });
          }}
          title="SCALES"
        />
      </View>
      <Text style={styles.appName}>MetrumApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 85,
    paddingHorizontal: 25,
    backgroundColor: "#3D9ED4",
  },
  menuSelect: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: "white",
  },
  tilesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  appName: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    fontFamily: "poppins-bold",
    color: "white",
    fontSize: 18,
  },
});

export default MainMenu;
