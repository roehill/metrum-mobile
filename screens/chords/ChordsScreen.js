import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../components/colors";
import CHORDS from "../../constans/chords/CHORDS";
import ROOT_NOTES from "../../constans/ROOT_NOTES";

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

  const chordImage = () => {
    if (rootNote != "" && chordType != "") {
      const chord = CHORDS.find(
        (chord) => chord.chordName === `${rootNote}${chordType}`
      );
      const chordImage = chord.chordImage;
      return (
        <View>
          <Text style={styles.chordName}>
            {rootNote}
            {chordType} chord
          </Text>
          <Image style={styles.chordImage} source={chordImage} />
          <Text style={styles.chordName}>{chord.chordNotes}</Text>
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
      {chordImage()}
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
  chordName: {
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: "poppins-bold",
    color: "#404040",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ChordsScreen;
