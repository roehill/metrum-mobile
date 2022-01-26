import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stave = (props) => {
  return (
    <View style={styles.staveContainer}>
      <View style={styles.stave}>
        <View style={styles.additionalLane}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.additionalLane}></View>
      </View>
      <View style={styles.notesContainer}>
        {props.notes.map((note) => {
          if (note.type === "full") {
            return (
              <View key={note.id}>
                <View style={{ ...styles.note, top: note.position }}>
                  <MaterialCommunityIcons
                    name="music-note-quarter"
                    size={50}
                    color="#404040"
                  />
                </View>
              </View>
            );
          }
          if (note.type === "sharp") {
            return (
              <View key={note.id}>
                <View style={{ ...styles.note, top: note.position }}>
                  <MaterialCommunityIcons
                    key={note.id}
                    name="music-note-quarter"
                    size={50}
                    color="#404040"
                  />
                  <MaterialCommunityIcons
                    style={styles.accidental}
                    name="music-accidental-sharp"
                    size={30}
                    color="#404040"
                  />
                </View>
              </View>
            );
          }
          if (note.type === "flat") {
            return (
              <View key={note.id}>
                <View style={{ ...styles.note, top: note.position }}>
                  <MaterialCommunityIcons
                    key={note.id}
                    name="music-note-quarter"
                    size={50}
                    color="#404040"
                  />
                  <MaterialCommunityIcons
                    style={styles.accidental}
                    name="music-accidental-flat"
                    size={30}
                    color="#404040"
                  />
                </View>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stave: {
    paddingVertical: 40,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    marginVertical: 9,
    height: 2,
    width: "95%",
    backgroundColor: "#404040",
  },
  additionalLane: {
    marginVertical: 9,
    height: 2,
    width: "95%",
    backgroundColor: "#E4E4E4",
  },
  notesContainer: {
    width: "100%",
    height: 150,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
  },
  note: {
    position: "relative",
    top: 0,
    left: 0,
  },
  accidental: {
    position: "absolute",
    top: 20,
    left: -6,
  },
});

export default Stave;
