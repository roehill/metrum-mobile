import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../components/colors";
import * as type from "../../constans/chords/CHORDS";
import ROOT_NOTES from "../../constans/ROOT_NOTES";

import Stave from "../../components/Stave";
import BackButton from "../../components/menu/BackButton";
import RootNoteMenu from "../../components/RootNoteMenu";
import ChordTypeMenu from "../../components/chordsGenerator/ChordTypeMenu";

const ChordsScreen = (props) => {
  const [rootNote, setRootNote] = useState("");
  const [chordType, setChordType] = useState("");

  const selectRootNote = (selectedRootNote) => {
    setRootNote(selectedRootNote);
  };

  const selectChordType = (selectedChordType) => {
    setChordType(selectedChordType);
  };
  const stave = () => {
    if (rootNote != "" && chordType != "") {
      let chords = {};
      if (chordType === "maj") {
        chords = type.majorChords;
      } else if (chordType === "min") {
        chords = type.minorChords;
      } else if (chordType === "dim") {
        chords = type.diminishedChords;
      } else if (chordType === "aug") {
        chords = type.augmentedChords;
      } else if (chordType === "7") {
        chords = type.dominantSeventhChords;
      } else if (chordType === "maj7") {
        chords = type.majorSeventhChords;
      } else if (chordType === "m7") {
        chords = type.minorSeventhChords;
      } else if (chordType === "maj6") {
        chords = type.majorSixthChords;
      } else if (chordType === "min6") {
        chords = type.minorSixthChords;
      } else if (chordType === "dim7") {
        chords = type.diminishedSeventhChords;
      }

      const chord = chords.find(
        (chord) => chord.chordName === `${rootNote}${chordType}`
      );

      return (
        <View>
          <View style={styles.chordNameContainer}>
            <Text style={styles.chordName}>
              {rootNote}
              {chordType} chord
            </Text>
            <Text style={styles.chordName}>( {chord.notes} )</Text>
          </View>
          <Stave chordNotes={chord.chordNotes} />
        </View>
      );
    }
  };

  return (
    <View style={styles.screen}>
      <BackButton
        onBack={() => {
          ROOT_NOTES.map((note) => {
            note.active = false;
          });
          props.navigation.goBack();
        }}
      />
      <Text style={styles.hint}>Choose the root note...</Text>
      <RootNoteMenu onChooseRootNote={selectRootNote} />
      <Text style={styles.hint}>...and a chord type</Text>
      <ChordTypeMenu onChooseChordType={selectChordType} />
      {stave()}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 25,
  },
  hint: {
    marginTop: 10,
    fontFamily: "poppins-bold",
    color: colors.textColor,
    fontSize: 18,
  },
  chordImage: {
    width: "100%",
  },
  chordNameContainer: {
    marginVertical: 10,
  },
  chordName: {
    fontFamily: "poppins-bold",
    color: "#404040",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ChordsScreen;
