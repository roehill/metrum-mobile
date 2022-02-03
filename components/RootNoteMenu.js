import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./colors";
import { sharpNotes, flatNotes } from "../constans/ROOT_NOTES";

const RootNoteMenu = (props) => {
  const [userAccidentals, setUserAccidentals] = useState(true);

  const changeAccidentals = () => {
    setUserAccidentals(!userAccidentals);
    notesWithAccidentals();
  };

  const notesWithAccidentals = () => {
    if (userAccidentals === true) {
      return sharpNotes;
    } else if (userAccidentals === false) {
      return flatNotes;
    }
  };

  const selectRootNote = (rootNote, id) => {
    notesWithAccidentals().map((note) => {
      note.active = false;
    });
    props.onChooseRootNote(rootNote);
    notesWithAccidentals()[id - 1].active = true;
  };

  const accidentalIcon = () => {
    if (userAccidentals === true) {
      return (
        <MaterialCommunityIcons
          style={styles.accidental}
          name="music-accidental-sharp"
          size={40}
          color="#FFF"
        />
      );
    } else if (userAccidentals === false) {
      return (
        <MaterialCommunityIcons
          style={styles.accidental}
          name="music-accidental-flat"
          size={40}
          color="#FFF"
        />
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={changeAccidentals}
        style={styles.accidentalWrapper}
      >
        {accidentalIcon()}
      </TouchableOpacity>
      <View style={styles.rootNotesContainer}>
        {notesWithAccidentals().map((rootNote) => (
          <TouchableOpacity
            onPress={selectRootNote.bind(this, rootNote.rootNote, rootNote.id)}
            style={
              rootNote.active ? styles.rootNoteItemActive : styles.rootNoteItem
            }
            key={rootNote.id}
          >
            <Text
              style={rootNote.active ? styles.rootNoteActive : styles.rootNote}
            >
              {rootNote.rootNote}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootNotesContainer: {
    marginVertical: 20,
    height: 90,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  rootNoteItem: {
    width: 50,
    height: 41,
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
  rootNoteItemActive: {
    width: 50,
    height: 41,
    backgroundColor: colors.primary,
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
  rootNote: {
    paddingTop: 3,
    color: colors.primary,
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  rootNoteActive: {
    paddingTop: 3,
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  accidentalWrapper: {
    position: "absolute",
    right: 0,
    top: -30,
    backgroundColor: colors.primary,
    width: 50,
    height: 40,
    borderRadius: 3,
  },
  accidental: {
    position: "absolute",
    right: 5,
    bottom: 0,
  },
});

export default RootNoteMenu;
