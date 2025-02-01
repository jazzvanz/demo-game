type Panel = {
  number: string;
  selected: string | null;
};

export const winningCombinations: string[][] = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["A", "D", "G"],
  ["B", "E", "H"],
  ["C", "F", "I"],
  ["A", "E", "I"],
  ["G", "E", "C"],
]

export const intialPanelValues: Panel[] = [
    {
      number: 'A',
      selected: null
    },
    {
      number: 'B',
      selected: null
    },
    {
      number: 'C',
      selected: null
    },
    {
      number: 'D',
      selected: null
    },
    {
      number: 'E',
      selected: null
    },
    {
      number: 'F',
      selected: null
    },
    {
      number: 'G',
      selected: null
    },
    {
      number: 'H',
      selected: null
    },
    {
      number: 'I',
      selected: null
    }
];
