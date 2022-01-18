import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../components/colors";
import ROOT_NOTES from "../../constans/ROOT_NOTES";
import SCALES from "../../constans/scales/SCALES";

import BackButton from "../../components/menu/BackButton";
import RootNoteMenu from "../../components/RootNoteMenu";
import ScaleTypeMenu from "../../components/scalesGenerator/ScaleTypeMenu";

const ScalesScreen = (props) => {
  const [rootNote, setRootNote] = useState("");
  const [scaleType, setScaleType] = useState("");

  const selectRootNote = (selectedRootNote) => {
    setRootNote(selectedRootNote);
  };

  const selectScaleType = (selectedScaleType) => {
    setScaleType(selectedScaleType);
  };

  const scaleImage = () => {
    if (rootNote != "" && scaleType != "") {
      const scale = SCALES.find(
        (scale) => scale.scaleName === `${rootNote} ${scaleType}`
      );
      const scaleImage = scale.scaleImage;
      return (
        <View>
          <Text style={styles.chordName}>
            {rootNote} {scaleType} scale
          </Text>
          {/* <Image style={styles.chordImage} source={chordImage} /> */}
          {/* <Text style={styles.chordName}>{chord.chordNotes}</Text> */}
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
      <Text style={styles.hint}>...and a scale</Text>
      <ScaleTypeMenu onChooseScaleType={selectScaleType} />
      {scaleImage()}
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
});

export default ScalesScreen;
