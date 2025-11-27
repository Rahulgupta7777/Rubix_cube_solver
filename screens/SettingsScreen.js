import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppHeader, ScreenContainer, ContentPadding } from '../components/common';
import { 
  SettingsSection, 
  SettingsToggle, 
  SettingsLink, 
  AboutItem 
} from '../components/settings';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <ScreenContainer>
      <AppHeader title="Settings" />
      <ScrollView style={styles.content}>
        <ContentPadding>
          <SettingsSection title="Appearance">
            <SettingsToggle
              title="Dark Mode"
              description="Switch to dark theme"
              icon="theme-light-dark"
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </SettingsSection>
          <SettingsSection title="Audio & Notifications">
            <SettingsToggle
              title="Enable Sound"
              description="Play sounds for timer and actions"
              icon="volume-high"
              value={soundEnabled}
              onValueChange={setSoundEnabled}
            />
            <SettingsToggle
              title="Notifications"
              description="Receive practice reminders"
              icon="bell"
              value={notifications}
              onValueChange={setNotifications}
            />
          </SettingsSection>
          <SettingsSection title="About">
            <AboutItem
              title="Rubix Cube Solver"
              description="Version 1.0.0"
              icon="information"
            />
            <SettingsLink
              title="Privacy Policy"
              description="View our privacy policy"
              icon="shield-account"
              onPress={() => console.log('Privacy Policy pressed')}
            />
          </SettingsSection>
        </ContentPadding>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default SettingsScreen;
