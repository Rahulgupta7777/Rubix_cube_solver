# Rubix Cube Solver & Trainer

A mobile application for solving and learning Rubik's Cubes, built with React Native and Expo.

## Requirements

- **Expo SDK**: 54.0.0
- **Expo Go App**: Use Expo Go SDK 54 or later on your mobile device
- **Node.js**: 18.x or later recommended

## Installation

```bash
# Install dependencies (use --legacy-peer-deps due to React 19 compatibility)
npm install --legacy-peer-deps

# Start the development server
npm start
```

## Running the App

1. Install the **Expo Go** app on your iOS or Android device
2. Run `npm start` to start the development server
3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

### Platform-specific Commands

```bash
# Start development server
npm start

# Start with Android
npm run android

# Start with iOS
npm run ios
```

## Features

- **Cube Solver**: Get instant solutions for any scrambled cube (powered by cubejs)
- **Learn Algorithms**: Master solving methods and techniques
- **Algorithm Library**: Browse OLL, PLL, and F2L algorithms
- **Flashcards**: Practice algorithms with spaced repetition
- **Timer**: Track your solve times with a precision timer
- **3D Cube Visualization**: View your cube state in 3D (powered by expo-three)

## SDK 54 Migration Notes

This app has been migrated to Expo SDK 54. Key changes include:

- Updated to React 19.1.0 and React Native 0.79.2
- Updated React Navigation to v7 (@react-navigation/native ^7.1.22)
- Updated @expo/vector-icons to ^14.0.4
- Added react-native-gesture-handler ~2.24.0
- Added expo-gl and expo-three for 3D visualization
- Added cubejs for cube solving (replaced rubiks-cube-solver)
- Downgraded three.js to 0.166.0 for expo-three compatibility
- Removed @react-three/fiber and @react-three/drei (not compatible with React Native/Expo)

## Troubleshooting

### Dependency Installation Issues

If you encounter peer dependency warnings, use:
```bash
npm install --legacy-peer-deps
```

### Three.js Loader Warnings

You may see warnings about missing Three.js loaders (GLTFLoader, MTLLoader, OBJLoader, ColladaLoader). These are from expo-three's internal imports and can be safely ignored. The Cube3D component uses only basic Three.js features that are fully compatible.

### Metro Bundler Issues

If Metro bundler shows errors, try:
```bash
# Clear Metro cache
npx expo start -c
```

## Project Structure

```
├── App.js                 # Main application entry point
├── app.json               # Expo configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── components/            # Reusable UI components
│   ├── common/           # Common UI elements
│   ├── cube/             # Cube-related components (including Cube3D)
│   ├── algorithm/        # Algorithm display components
│   ├── flashcard/        # Flashcard components
│   ├── timer/            # Timer components
│   └── settings/         # Settings components
├── context/              # React Context providers
├── data/                 # Static data (algorithms, tutorials)
├── hooks/                # Custom React hooks
├── screens/              # Screen components
└── utils/                # Utility functions
```

## Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| expo | ~54.0.0 | Expo SDK |
| react | 19.1.0 | React |
| react-native | 0.79.2 | React Native |
| react-native-paper | ^5.14.5 | Material Design UI |
| @react-navigation/native | ^7.1.22 | Navigation |
| @react-navigation/bottom-tabs | ^7.8.7 | Bottom tab navigation |
| @expo/vector-icons | ^14.0.4 | Icon library |
| react-native-safe-area-context | 5.4.0 | Safe area handling |
| react-native-screens | ~4.10.0 | Native navigation screens |
| react-native-gesture-handler | ~2.24.0 | Gesture handling |
| @react-native-async-storage/async-storage | 1.23.1 | Async storage |
| expo-gl | ~15.0.4 | OpenGL for Expo |
| expo-three | ^8.0.0 | Three.js wrapper for Expo |
| three | 0.166.0 | 3D graphics library |
| cubejs | 1.1.0 | Rubik's cube solver |

## Known Issues & Limitations

### Security Vulnerabilities

The expo-three package has some transitive dependencies with known vulnerabilities (node-fetch < 2.6.7). These are in build-time dependencies and do not affect runtime security. They cannot be fixed without breaking changes to expo-three itself.

### 3D Cube Visualization

The Cube3D component provides a basic rotating 3D visualization. For advanced features like user-controlled rotation via touch gestures, additional implementation would be needed using expo-three's gesture handling.

### Cube Solver

The cubejs solver requires initialization on app start. If the solver fails, check that the cube state is valid (each color appears exactly 9 times).

## Future Improvements

- Add touch-based cube rotation controls
- Implement step-by-step solution animation
- Add cube state validation before solving
- Add more algorithm categories

## License

Private project.
