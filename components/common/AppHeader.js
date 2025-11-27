import React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = ({ title, subtitle, actions }) => {
  return (
    <Appbar.Header style={{ backgroundColor: '#000000' }}>
      <Appbar.Content 
        title={title} 
        subtitle={subtitle}
        titleStyle={{ color: '#ffffff' }}
        subtitleStyle={{ color: '#cccccc' }}
      />
      {actions && actions.map((action, index) => (
        <Appbar.Action
          key={index}
          icon={action.icon}
          onPress={action.onPress}
          iconColor="#ffffff"
        />
      ))}
    </Appbar.Header>
  );
};

export default AppHeader;
