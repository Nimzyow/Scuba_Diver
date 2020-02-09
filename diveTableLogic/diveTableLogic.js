export const diveTableInitialPressureGroup = (depth, bottomTime) => {
  let depth = Number(depth);
  let bT = Number(bottomTime);
};

const createValueArr = (min, max) => {
  arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

export const depth10 = [
  { Group: "A", range: createValueArr(2, 10) },
  { Group: "B", range: createValueArr(11, 20) },
  { Group: "C", range: createValueArr(21, 26) },
  { Group: "D", range: createValueArr(27, 30) },
  { Group: "E", range: createValueArr(31, 34) },
  { Group: "F", range: createValueArr(35, 37) },
  { Group: "G", range: createValueArr(38, 41) },
  { Group: "H", range: createValueArr(42, 45) },
  { Group: "I", range: createValueArr(46, 50) },
  { Group: "J", range: createValueArr(51, 54) },
  { Group: "K", range: createValueArr(55, 59) },
  { Group: "L", range: createValueArr(60, 64) },
  { Group: "M", range: createValueArr(65, 70) },
  { Group: "N", range: createValueArr(71, 75) },
  { Group: "O", range: createValueArr(76, 82) },
  { Group: "P", range: createValueArr(83, 88) },
  { Group: "Q", range: createValueArr(89, 95) },
  { Group: "R", range: createValueArr(96, 104) },
  { Group: "S", range: createValueArr(105, 112) },
  { Group: "T", range: createValueArr(113, 122) },
  { Group: "U", range: createValueArr(123, 133) },
  { Group: "V", range: createValueArr(134, 145) },
  { Group: "W", range: createValueArr(146, 160) },
  { Group: "X", range: createValueArr(161, 178) },
  { Group: "Y", range: createValueArr(179, 199) },
  { Group: "Z", range: createValueArr(200, 219) }
];
