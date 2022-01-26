import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../components/colors";
import * as type from "../../constans/scales/SCALES";
import { sharpNotes, flatNotes } from "../../constans/ROOT_NOTES";

import Stave from "../../components/Stave";
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

  const stave = () => {
    if (rootNote != "" && scaleType != "") {
      let scales = {};
      if (scaleType === "Major") {
        scales = type.majorScales;
      } else if (scaleType === "Harmonic Minor") {
        scales = type.harmonicMinorScales;
      } else if (scaleType === "Melodic Minor") {
        scales = type.melodicMinorScales;
      }

      const scale = scales.find(
        (scale) => scale.scaleName === `${rootNote}${scaleType}`
      );

      return (
        <View>
          <View style={styles.scaleNameContainer}>
            <Text style={styles.scaleName}>
              {rootNote} {scaleType} scale
            </Text>
            <Text style={styles.scaleNotes}>( {scale.notes} )</Text>
          </View>
          <Stave notes={scale.scaleNotes} />
        </View>
      );
    }
  };

  return (
    <View style={styles.screen}>
      <BackButton
        onBack={() => {
          sharpNotes.map((note) => {
            note.active = false;
          });
          props.navigation.goBack();
        }}
      />
      <Text style={styles.hint}>Choose the root note...</Text>
      <RootNoteMenu onChooseRootNote={selectRootNote} />
      <Text style={styles.hint}>...and a scale type</Text>
      <ScaleTypeMenu onChooseScaleType={selectScaleType} />
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
  scaleNameContainer: {
    marginVertical: 10,
  },
  scaleName: {
    fontFamily: "poppins-bold",
    color: "#404040",
    fontSize: 18,
    textAlign: "center",
  },
  scaleNotes: {
    fontFamily: "poppins-bold",
    color: "#404040",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ScalesScreen;
