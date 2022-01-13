import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../colors";

const BackButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onBack} style={styles.buttonContainer}>
      <AntDesign name="arrowleft" size={30} color="#404040" />
      <Text style={styles.buttonTitle}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C6C6C6",
    width: 120,
    height: 40,
    borderRadius: 3,
  },
  buttonTitle: {
    paddingTop: 3,
    paddingLeft: 10,
    fontFamily: "poppins-bold",
    color: colors.textColor,
    fontSize: 18,
  },
});

export default BackButton;
