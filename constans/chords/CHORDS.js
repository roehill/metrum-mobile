const chordPositions = [
  { id: 0, name: "C1", value: 134 },
  { id: 1, name: "D1", value: 124 },
  { id: 2, name: "E1", value: 113 },
  { id: 3, name: "F1", value: 104 },
  { id: 4, name: "G1", value: 94 },
  { id: 5, name: "A1", value: 84 },
  { id: 6, name: "B1", value: 74 },
  { id: 7, name: "C2", value: 64 },
  { id: 8, name: "D2", value: 54 },
  { id: 9, name: "E2", value: 44 },
  { id: 10, name: "F2", value: 34 },
  { id: 11, name: "G2", value: 24 },
  { id: 12, name: "A2", value: 14 },
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
    chordName: "DbMaj",
    notes: "Db - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: chordPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: chordPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: chordPositions[5].value,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    chordName: "EbMaj",
    notes: "Eb - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: chordPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
    ],
  },
  {
    id: 7,
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
  {
    id: 8,
    chordName: "FMaj",
    notes: "F - A - C",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: chordPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: chordPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#Maj",
    notes: "F# - A# - C#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: chordPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: chordPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: chordPositions[7].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "GbMaj",
    notes: "Gb - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "GMaj",
    notes: "G - B - D",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: chordPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#Maj",
    notes: "G# - C - D#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "AbMaj",
    notes: "Ab - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: chordPositions[9].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "AMaj",
    notes: "A - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: chordPositions[9].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#Maj",
    notes: "A# - D - F",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: chordPositions[10].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "BbMaj",
    notes: "Bb - D - F",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: chordPositions[10].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "BMaj",
    notes: "B - D# - F#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: chordPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: chordPositions[10].value,
      },
    ],
  },
];

const minorChords = [
  {
    id: 1,
    chordName: "CMin",
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
    chordName: "DbMaj",
    notes: "Db - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: chordPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: chordPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: chordPositions[5].value,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    chordName: "EbMaj",
    notes: "Eb - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: chordPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
    ],
  },
  {
    id: 7,
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
  {
    id: 8,
    chordName: "FMaj",
    notes: "F - A - C",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: chordPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: chordPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#Maj",
    notes: "F# - A# - C#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: chordPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: chordPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: chordPositions[7].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "GbMaj",
    notes: "Gb - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "GMaj",
    notes: "G - B - D",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: chordPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#Maj",
    notes: "G# - C - D#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: chordPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: chordPositions[8].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "AbMaj",
    notes: "Ab - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: chordPositions[9].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "AMaj",
    notes: "A - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: chordPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: chordPositions[9].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#Maj",
    notes: "A# - D - F",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: chordPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: chordPositions[10].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "BbMaj",
    notes: "Bb - D - F",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: chordPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: chordPositions[10].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "BMin",
    notes: "B - D# - F#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: chordPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: chordPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: chordPositions[10].value,
      },
    ],
  },
];

export { majorChords, minorChords };
