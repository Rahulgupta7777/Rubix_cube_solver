import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  AppHeader, 
  ScreenContainer, 
  ContentPadding, 
  ActionCard, 
  InfoCard 
} from '../components/common';

const HomeScreen = ({ navigation }) => {
  const handleSolveCube = () => navigation?.navigate('Solver');
  const handleLearnAlgorithms = () => navigation?.navigate('Learn');

  return (
    <ScreenContainer>
      <AppHeader title="Rubix Cube Solver & Trainer" />
      <ContentPadding>
        <InfoCard
          title="Welcome to Rubix Cube Solver!"
          description="Master the art of solving Rubik's Cubes with step-by-step guidance and practice tools."
        />
        <View style={styles.actionButtons}>
          <ActionCard
            icon="cube"
            title="Solve a Cube"
            description="Get instant solutions for any scrambled cube"
            onPress={handleSolveCube}
          />
          <ActionCard
            icon="book-open-variant"
            title="Learn Algorithms"
            description="Master solving methods and techniques"
            onPress={handleLearnAlgorithms}
          />
        </View>
      </ContentPadding>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
