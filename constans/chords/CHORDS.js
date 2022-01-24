const notesPositions = [
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
    chordName: "Cmaj",
    notes: "C - E - G",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#maj",
    notes: "C# - F - G#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbmaj",
    notes: "Db - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dmaj",
    notes: "D - F# - A",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#maj",
    notes: "D# - G - A#",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebmaj",
    notes: "Eb - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Emaj",
    notes: "E - G# - B",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fmaj",
    notes: "F - A - C",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#maj",
    notes: "F# - A# - C#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbmaj",
    notes: "Gb - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gmaj",
    notes: "G - B - D",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#maj",
    notes: "G# - C - D#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abmaj",
    notes: "Ab - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Amaj",
    notes: "A - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#maj",
    notes: "A# - D - F",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbmaj",
    notes: "Bb - D - F",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bmaj",
    notes: "B - D# - F#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
];

const minorChords = [
  {
    id: 1,
    chordName: "Cmin",
    notes: "C - Eb - G",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#min",
    notes: "C# - E - G#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbmin",
    notes: "Db - E - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dmin",
    notes: "D - F - A",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#min",
    notes: "D# - F# - A#",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebmin",
    notes: "Eb - Gb - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Emin",
    notes: "E - G - B",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fmin",
    notes: "F - Ab - C",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#min",
    notes: "F# - A - C#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbmin",
    notes: "Gb - A - Db",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gmin",
    notes: "G - Bb - D",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#min",
    notes: "G# - B - D#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abmin",
    notes: "Ab - B - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Amin",
    notes: "A - C - E",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#min",
    notes: "A# - C# - F",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbmin",
    notes: "Bb - Db - F",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bmin",
    notes: "B - D - F#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
];

const diminishedChords = [
  {
    id: 1,
    chordName: "Cdim",
    notes: "C - Eb - Gb",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#dim",
    notes: "C# - E - G",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbdim",
    notes: "Db - E - G",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Ddim",
    notes: "D - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#dim",
    notes: "D# - F# - A",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebdim",
    notes: "Eb - Gb - A",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Edim",
    notes: "E - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fdim",
    notes: "F - Ab - B",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#dim",
    notes: "F# - A - C",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbdim",
    notes: "Gb - A - C",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gdim",
    notes: "G - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#dim",
    notes: "G# - B - D",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abdim",
    notes: "Ab - B - D",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Adim",
    notes: "A - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#dim",
    notes: "A# - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbdim",
    notes: "Bb - Db - E",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bdim",
    notes: "B - D - F",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
];

const augmentedChords = [
  {
    id: 1,
    chordName: "Caug",
    notes: "C - E - G#",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#aug",
    notes: "C# - F - A",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbaug",
    notes: "Db - F - A",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Daug",
    notes: "D - F# - A#",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#aug",
    notes: "D# - G - B",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebaug",
    notes: "Eb - G - B",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Eaug",
    notes: "E - G# - C",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Faug",
    notes: "F - A - C#",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#aug",
    notes: "F# - A# - D",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbaug",
    notes: "Gb - Bb - D",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gaug",
    notes: "G - B - D#",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#aug",
    notes: "G# - C - E",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abaug",
    notes: "Ab - C - E",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Aaug",
    notes: "A - C# - F",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#aug",
    notes: "A# - D - F#",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbaug",
    notes: "Bb - D - Gb",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "Gb2",
        type: "flat",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Baug",
    notes: "B - D# - G",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
];

const dominantSeventhChords = [
  {
    id: 1,
    chordName: "C7",
    notes: "C - E - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#7",
    notes: "C# - F - G# - B",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Db7",
    notes: "Db - F - Ab - B",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "D7",
    notes: "D - F# - A - C",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#7",
    notes: "D# - G - A# - C#",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Eb7",
    notes: "Eb - G - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "E7",
    notes: "E - G# - B - D",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "F7",
    notes: "F - A - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#7",
    notes: "F# - A# - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gb7",
    notes: "Gb - Bb - Db - E",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "G7",
    notes: "G - B - D - F",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#7",
    notes: "G# - C - D# - F#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Ab7",
    notes: "Ab - C - Eb - Gb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "Gb2",
        type: "flat",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "A7",
    notes: "A - C# - E - G",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#7",
    notes: "A# - D - F - G#",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G#2",
        type: "sharp",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bb7",
    notes: "Bb - D - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "Ab2",
        type: "flat",
        position: notesPositions[12].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "B7",
    notes: "B - D# - F# - A",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "A2",
        type: "full",
        position: notesPositions[12].value,
      },
    ],
  },
];

const majorSeventhChords = [
  {
    id: 1,
    chordName: "Cmaj7",
    notes: "C - E - G - B",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#maj7",
    notes: "C# - F - G# - C",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbmaj7",
    notes: "Db - F - Ab - C",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dmaj7",
    notes: "D - F# - A - C#",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#maj7",
    notes: "D# - G - A# - D",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebmaj7",
    notes: "Eb - G - Bb - D",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "EMmaj7",
    notes: "E - G# - B - D#",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fmaj7",
    notes: "F - A - C - E",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#maj7",
    notes: "F# - A# - C# - F",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbmaj7",
    notes: "Gb - Bb - Db - F",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gmaj7",
    notes: "G - B - D - F#",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#maj7",
    notes: "G# - C - D# - G",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abmaj7",
    notes: "Ab - C - Eb - G",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Amaj7",
    notes: "A - C# - E - G#",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G#2",
        type: "sharp",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#maj7",
    notes: "A# - D - F - A",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "A2",
        type: "full",
        position: notesPositions[12].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbmaj7",
    notes: "Bb - D - F - A",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "A2",
        type: "full",
        position: notesPositions[12].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bmaj7",
    notes: "B - D# - F# - A#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "A#2",
        type: "sharp",
        position: notesPositions[12].value,
      },
    ],
  },
];

const minorSeventhChords = [
  {
    id: 1,
    chordName: "Cm7",
    notes: "C - Eb - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#m7",
    notes: "C# - E - G# - B",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbm7",
    notes: "Db - E - Ab - B",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dm7",
    notes: "D - F - A - C",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#m7",
    notes: "D# - F# - A# - C#",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebm7",
    notes: "Eb - Gb - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Em7",
    notes: "E - G - B - D",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fm7",
    notes: "F - Ab - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#m7",
    notes: "F# - A - C# - E",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbm7",
    notes: "Gb - A - Db - E",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gm7",
    notes: "G - Bb - D - F",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#m7",
    notes: "G# - B - D# - F#",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abm7",
    notes: "Ab - B - Eb - Gb",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "Gb2",
        type: "flat",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Am7",
    notes: "A - C - E - G",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#m7",
    notes: "A# - C# - F - G#",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G#2",
        type: "sharp",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbm7",
    notes: "Bb - Db - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "Ab2",
        type: "flat",
        position: notesPositions[12].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bm7",
    notes: "B - D - F# - A",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "A2",
        type: "full",
        position: notesPositions[12].value,
      },
    ],
  },
];

const diminishedSeventhChords = [
  {
    id: 1,
    chordName: "Cdim7",
    notes: "C - Eb - Gb - A",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#dim7",
    notes: "C# - E - G - A#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbdim7",
    notes: "Db - E - G - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Ddim7",
    notes: "D - F - Ab - B",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#dim7",
    notes: "D# - F# - A - C",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebdim7",
    notes: "Eb - Gb - A - C",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Edim7",
    notes: "E - G - Bb - Db",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fdim7",
    notes: "F - Ab - B - D",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#dim7",
    notes: "F# - A - C - D#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbdim7",
    notes: "Gb - A - C - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gdim7",
    notes: "G - Bb - Db - E",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#dim7",
    notes: "G# - B - D - F",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abdim7",
    notes: "Ab - B - D - F",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Adim7",
    notes: "A - C - Eb - Gb",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "Gb2",
        type: "flat",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#dim7",
    notes: "A# - C# - E - G",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbdim7",
    notes: "Bb - Db - E - G",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bdim7",
    notes: "B - D - F - Ab",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "Ab2",
        type: "flat",
        position: notesPositions[12].value,
      },
    ],
  },
];

const majorSixthChords = [
  {
    id: 1,
    chordName: "Cmaj6",
    notes: "C - E - G - A",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#maj6",
    notes: "C# - F - G# - A#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbmaj6",
    notes: "Db - F - Ab - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dmaj6",
    notes: "D - F# - A - B",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#maj6",
    notes: "D# - G - A# - C",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebmaj6",
    notes: "Eb - G - Bb - C",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Emaj6",
    notes: "E - G# - B - C#",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fmaj6",
    notes: "F - A - C - D",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#maj6",
    notes: "F# - A# - C# - D#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbmaj6",
    notes: "Gb - Bb - Db - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gmaj6",
    notes: "G - B - D - E",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#maj6",
    notes: "G# - C - D# - F",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abmaj6",
    notes: "Ab - C - Eb - F",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Amaj6",
    notes: "A - C# - E - F#",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#maj6",
    notes: "A# - D - F - G",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbmaj6",
    notes: "Bb - D - F - G",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bmaj6",
    notes: "B - D# - F# - G#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G#2",
        type: "sharp",
        position: notesPositions[11].value,
      },
    ],
  },
];

const minorSixthChords = [
  {
    id: 1,
    chordName: "Cmin6",
    notes: "C - Eb - G - A",
    chordNotes: [
      {
        id: 1,
        name: "C1",
        type: "full",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 2,
    chordName: "C#min6",
    notes: "C# - E - G# - A#",
    chordNotes: [
      {
        id: 1,
        name: "C#1",
        type: "sharp",
        position: notesPositions[0].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 4,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
    ],
  },
  {
    id: 3,
    chordName: "Dbmin6",
    notes: "Db - E - Ab - Bb",
    chordNotes: [
      {
        id: 1,
        name: "Db1",
        type: "flat",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 3,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 4,
    chordName: "Dmin6",
    notes: "D - F - A - B",
    chordNotes: [
      {
        id: 1,
        name: "D1",
        type: "full",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
    ],
  },
  {
    id: 5,
    chordName: "D#min6",
    notes: "D# - F# - A# - C",
    chordNotes: [
      {
        id: 1,
        name: "D#1",
        type: "sharp",
        position: notesPositions[1].value,
      },
      {
        id: 2,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 3,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 6,
    chordName: "Ebmin6",
    notes: "Eb - Gb - Bb - C",
    chordNotes: [
      {
        id: 1,
        name: "Eb1",
        type: "flat",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 7,
    chordName: "Emin6",
    notes: "E - G - B - C#",
    chordNotes: [
      {
        id: 1,
        name: "E1",
        type: "full",
        position: notesPositions[2].value,
      },
      {
        id: 2,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 3,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 4,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
    ],
  },
  {
    id: 8,
    chordName: "Fmin6",
    notes: "F - Ab - C - D",
    chordNotes: [
      {
        id: 1,
        name: "F1",
        type: "full",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 9,
    chordName: "F#min6",
    notes: "F# - A - C# - D#",
    chordNotes: [
      {
        id: 1,
        name: "F#1",
        type: "sharp",
        position: notesPositions[3].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 4,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
    ],
  },
  {
    id: 10,
    chordName: "Gbmin6",
    notes: "Gb - A - Db - Eb",
    chordNotes: [
      {
        id: 1,
        name: "Gb1",
        type: "flat",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 3,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 11,
    chordName: "Gmin6",
    notes: "G - Bb - D - E",
    chordNotes: [
      {
        id: 1,
        name: "G1",
        type: "full",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
    ],
  },
  {
    id: 12,
    chordName: "G#min6",
    notes: "G# - B - D# - F",
    chordNotes: [
      {
        id: 1,
        name: "G#1",
        type: "sharp",
        position: notesPositions[4].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "D#2",
        type: "sharp",
        position: notesPositions[8].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 13,
    chordName: "Abmin6",
    notes: "Ab - B - Eb - F",
    chordNotes: [
      {
        id: 1,
        name: "Ab1",
        type: "flat",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 3,
        name: "Eb2",
        type: "flat",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 14,
    chordName: "Amin6",
    notes: "A - C - E - F#",
    chordNotes: [
      {
        id: 1,
        name: "A1",
        type: "full",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C2",
        type: "full",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "E2",
        type: "full",
        position: notesPositions[9].value,
      },
      {
        id: 4,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
    ],
  },
  {
    id: 15,
    chordName: "A#min6",
    notes: "A# - C# - F - G",
    chordNotes: [
      {
        id: 1,
        name: "A#1",
        type: "sharp",
        position: notesPositions[5].value,
      },
      {
        id: 2,
        name: "C#2",
        type: "sharp",
        position: notesPositions[7].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 16,
    chordName: "Bbmin6",
    notes: "Bb - Db - F - G",
    chordNotes: [
      {
        id: 1,
        name: "Bb1",
        type: "flat",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "Db2",
        type: "flat",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F2",
        type: "full",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G2",
        type: "full",
        position: notesPositions[11].value,
      },
    ],
  },
  {
    id: 17,
    chordName: "Bmin6",
    notes: "B - D - F# - G#",
    chordNotes: [
      {
        id: 1,
        name: "B1",
        type: "full",
        position: notesPositions[6].value,
      },
      {
        id: 2,
        name: "D2",
        type: "full",
        position: notesPositions[8].value,
      },
      {
        id: 3,
        name: "F#2",
        type: "sharp",
        position: notesPositions[10].value,
      },
      {
        id: 4,
        name: "G#2",
        type: "sharp",
        position: notesPositions[11].value,
      },
    ],
  },
];

export {
  majorChords,
  minorChords,
  diminishedChords,
  dominantSeventhChords,
  majorSeventhChords,
  minorSeventhChords,
  augmentedChords,
  majorSixthChords,
  minorSixthChords,
  diminishedSeventhChords,
};
