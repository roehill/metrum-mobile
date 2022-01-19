const chordPositions = [
  {
    name: "C1",
    value: 134,
  },
  {
    name: "D1",
    value: 124,
  },
  {
    name: "E1",
    value: 113,
  },
  {
    name: "F1",
    value: 104,
  },
  {
    name: "G1",
    value: 94,
  },
  {
    name: "A1",
    value: 84,
  },
  {
    name: "B1",
    value: 74,
  },
  "C2-29",
  "D2-19",
  "E2-9",
  "F2--1",
  "G2--11",
  "A2--24",
];

const majorChords = [
  {
    id: 1,
    chordName: "CMaj",
    notes: "C - E - G",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: chordPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: chordPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#Maj",
    notes: "C# - F - G#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: chordPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: chordPositions[3].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: chordPositions[4].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "DMaj",
    notes: "D - F# - A",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: chordPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: chordPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: chordPositions[5].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "D#Maj",
    notes: "D# - G - A#",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: chordPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: chordPositions[5].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "EMaj",
    notes: "E - G# - B",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: chordPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: chordPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: chordPositions[6].value,
      },
    ],
  },
];

export default majorChords;
