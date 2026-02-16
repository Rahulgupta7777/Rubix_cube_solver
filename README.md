# Rubix Cube Solver & Trainer

A professional mobile app for solving and mastering the Rubik's Cube, built with **React Native** and **Expo**. Instantly solve scrambles, study algorithms, train with flashcards, record times, and visualize your cube in 3D.

---

## Features

- **Instant Cube Solver:** Solve any valid scramble using [cubejs](https://github.com/ldez/cubejs).
- **Algorithm Library:** Browse and learn F2L, OLL, PLL algorithms.
- **Flashcard Training:** Practice algorithms with spaced repetition.
- **Tutorials:** Step-by-step guides to learn solving methods.
- **Precision Timer:** Track solves, averages, and personal bests.
- **3D Visualization:** View cube states in interactive 3D (expo-three powered).
- **Modern Material UI:** Intuitive and clean interface.

---

## Technology Stack

- **React Native** & **Expo SDK 54**
- **cubejs** for solving logic
- **expo-three** and **three.js** for 3D rendering
- **@react-navigation/native** v7 for navigation
- **React Native Paper** & **@expo/vector-icons** for UI
- **Async Storage** for data persistence

---

## Installation

> **Requires:** Node.js v18.x or newer, [Expo Go](https://expo.dev/client) app (SDK 54+)

```bash
npm install --legacy-peer-deps
npm start
```

---

## Running the App

1. Install Expo Go on your mobile device.
2. Start the development server:
   ```bash
   npm start
   ```
3. Scan the QR code shown in your terminal with Expo Go (Android) or your iOS Camera.

**Platform-specific commands:**

```bash
npm run android   # Run on Android device/emulator
npm run ios       # Run on iOS simulator/device
```

---

## Troubleshooting

- Use `npm install --legacy-peer-deps` for dependency warnings.
- Clear Metro cache with: `npx expo start -c`
- Warnings about three.js loaders from expo-three can be ignored.
- Ensure every cube color appears exactly nine times for solver input.

---

## Known Issues

- **expo-three vulnerabilities:** 
- **3D Cube controls:** 
- **Cube state checking:** Cube input is not auto-validated; ensure your scramble is accurate.

---
