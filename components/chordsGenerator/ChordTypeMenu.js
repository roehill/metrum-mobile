import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../colors";
import CHORD_TYPES from "../../constans/chords/CHORD_TYPES";

const ChordTypeMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const selectChordType = (chordType) => {
    props.onChooseChordType(chordType);
    setVisible(false);
  };

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownList}>
          {CHORD_TYPES.map((chord) => (
            <TouchableOpacity
              key={chord.id}
              style={styles.dropdownListItem}
              onPress={selectChordType.bind(this, chord.chordType)}
            >
              <Text style={styles.dropdownListItemText}>{chord.chordType}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.modal}></View>
        </View>
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
        <Text style={styles.dropdownText}>Tap to expand</Text>
        <AntDesign name="down" size={25} color={colors.primary} />
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    zIndex: 99,
  },
  dropdownText: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    paddingTop: 3,
    color: colors.primary,
  },
  dropdownList: {
    position: "absolute",
    top: 60,
    width: "100%",
    left: 0,
    zIndex: 98,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "white",
  },
  dropdownListItem: {
    margin: 2,
    backgroundColor: "#c6c6c6",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownListItemText: {
    paddingTop: 3,
    fontFamily: "poppins-bold",
    color: colors.textColor,
  },
});

export default ChordTypeMenu;
