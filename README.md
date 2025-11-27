# Rubix Cube Solver & Trainer

A mobile application for solving and learning Rubik's Cubes, built with React Native and Expo.

## Requirements

- **Expo SDK**: 54.0.0
- **Expo Go App**: Use Expo Go SDK 54 or later on your mobile device
- **Node.js**: 18.x or later recommended

## Installation

```bash
# Install dependencies
npm install

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

- **Cube Solver**: Get instant solutions for any scrambled cube
- **Learn Algorithms**: Master solving methods and techniques
- **Algorithm Library**: Browse OLL, PLL, and F2L algorithms
- **Flashcards**: Practice algorithms with spaced repetition
- **Timer**: Track your solve times with a precision timer

## SDK 54 Migration Notes

This app has been migrated from Expo SDK 51 to SDK 54. Key changes include:

- Updated to React 19.1.0 and React Native 0.81.5
- Updated React Navigation to v7 (@react-navigation/native ^7.1.22)
- Updated @expo/vector-icons to ^15.0.3
- Updated react-native-screens to ~4.16.0
- Updated react-native-safe-area-context to 5.6.2
- Enabled New Architecture (newArchEnabled: true)
- Removed web platform support (focused on iOS/Android)

## Project Structure

```
├── App.js                 # Main application entry point
├── app.json               # Expo configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── components/            # Reusable UI components
│   ├── common/           # Common UI elements
│   ├── cube/             # Cube-related components
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
| react-native | ^0.81.5 | React Native |
| react-native-paper | ^5.14.5 | Material Design UI |
| @react-navigation/native | ^7.1.22 | Navigation |
| @react-navigation/bottom-tabs | ^7.8.7 | Bottom tab navigation |
| @expo/vector-icons | ^15.0.3 | Icon library |
| react-native-safe-area-context | 5.6.2 | Safe area handling |
| react-native-screens | ~4.16.0 | Native navigation screens |
| @react-native-async-storage/async-storage | ^2.2.0 | Async storage |

## License

Private project.
