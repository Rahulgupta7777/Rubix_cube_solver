// PLL (Permutation of Last Layer) algorithms
export const pllAlgorithms = [
  {
    id: 'pll-t',
    name: 'T Permutation',
    notation: "R U R' U' R' F R2 U' R' U' R U R' F'",
    category: 'PLL',
    difficulty: 'beginner',
  },
  {
    id: 'pll-y',
    name: 'Y Permutation',
    notation: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    category: 'PLL',
    difficulty: 'intermediate',
  },
  {
    id: 'pll-ua',
    name: 'Ua Permutation',
    notation: "R U' R U R U R U' R' U' R2",
    category: 'PLL',
    difficulty: 'beginner',
  },
  {
    id: 'pll-ub',
    name: 'Ub Permutation',
    notation: "R2 U R U R' U' R' U' R' U R'",
    category: 'PLL',
    difficulty: 'beginner',
  },
  {
    id: 'pll-h',
    name: 'H Permutation',
    notation: "M2 U M2 U2 M2 U M2",
    category: 'PLL',
    difficulty: 'beginner',
  },
  {
    id: 'pll-z',
    name: 'Z Permutation',
    notation: "M2 U M2 U M' U2 M2 U2 M' U2",
    category: 'PLL',
    difficulty: 'intermediate',
  },
  {
    id: 'pll-aa',
    name: 'Aa Permutation',
    notation: "x R' U R' D2 R U' R' D2 R2 x'",
    category: 'PLL',
    difficulty: 'intermediate',
  },
  {
    id: 'pll-ab',
    name: 'Ab Permutation',
    notation: "x R2 D2 R U R' D2 R U' R x'",
    category: 'PLL',
    difficulty: 'intermediate',
  },
];

export default pllAlgorithms;
