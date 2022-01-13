import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tile = (props) => {
  return (
    <TouchableOpacity onPress={props.onNavigate} style={styles.tile}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 160,
    height: 130,
    backgroundColor: "white",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-black",
    color: "#3D9ED4",
    fontSize: 18,
  },
});

export default Tile;
