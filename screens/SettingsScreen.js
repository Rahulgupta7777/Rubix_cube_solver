import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, List, Switch, Card, Title } from 'react-native-paper';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [enableSound, setEnableSound] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      
      <ScrollView style={styles.content}>
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Title style={styles.sectionTitle}>Appearance</Title>
            
            <List.Item
              title="Dark Mode"
              description="Switch to dark theme"
              left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
              right={() => (
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                />
              )}
            />
          </Card.Content>
        </Card>

        <Card style={styles.settingsCard}>
          <Card.Content>
            <Title style={styles.sectionTitle}>Audio & Notifications</Title>
            
            <List.Item
              title="Enable Sound"
              description="Play sounds for timer and actions"
              left={(props) => <List.Icon {...props} icon="volume-high" />}
              right={() => (
                <Switch
                  value={enableSound}
                  onValueChange={setEnableSound}
                />
              )}
            />
            
            <List.Item
              title="Notifications"
              description="Receive practice reminders"
              left={(props) => <List.Icon {...props} icon="bell" />}
              right={() => (
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                />
              )}
            />
          </Card.Content>
        </Card>

        <Card style={styles.settingsCard}>
          <Card.Content>
            <Title style={styles.sectionTitle}>About</Title>
            
            <List.Item
              title="Munna ka aap ka phela varsion koi"
              description="1.0.0"
              left={(props) => <List.Icon {...props} icon="information" />}
              disabled
            />
            
            <List.Item
              title="Privacy Policy"
              description="View our privacy policy"
              left={(props) => <List.Icon {...props} icon="shield-account" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Privacy Policy pressed')}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  settingsCard: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  sectionTitle: {
    marginBottom: 8,
    color: '#ffffff',
    fontSize: 18,
  },
});

export default SettingsScreen;
