import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

import colors from "../colors";
import { AntDesign } from "@expo/vector-icons";
import SCALE_TYPES from "../../constans/scales/SCALE_TYPES";

const ScaleTypeMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const selectScaleType = (scaleType) => {
    props.onChooseScaleType(scaleType);
    setVisible(false);
  };

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
        <Text style={styles.dropdownText}>Tap to expand</Text>
        <AntDesign name="down" size={25} color={colors.primary} />
      </TouchableOpacity>
      <Modal
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.dropdownList}>
          {SCALE_TYPES.map((scale) => (
            <TouchableOpacity
              key={scale.id}
              style={styles.dropdownListItem}
              onPress={selectScaleType.bind(this, scale.scaleType)}
            >
              <Text style={styles.dropdownListItemText}>{scale.scaleType}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={toggleDropdown} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownListItem: {
    margin: 2,
    backgroundColor: "#c6c6c6",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownListItemText: {
    paddingTop: 3,
    fontFamily: "poppins-bold",
    color: colors.textColor,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FC5050",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    paddingTop: 3,
    fontFamily: "poppins-bold",
    color: "white",
  },
});

export default ScaleTypeMenu;
