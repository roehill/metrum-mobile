import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../colors";
import ROOT_NOTES from "../../constans/ROOT_NOTES";

const RootNoteMenu = (props) => {
  const selectRootNote = (rootNote, id) => {
    ROOT_NOTES.map((note) => {
      note.active = false;
    });
    props.onChooseRootNote(rootNote);
    ROOT_NOTES[id - 1].active = true;
  };

  return (
    <View>
      <View style={styles.rootNotesContainer}>
        {ROOT_NOTES.map((rootNote) => (
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
});

export default RootNoteMenu;
