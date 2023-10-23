import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainStack } from './src/routes/MainStack';
import { colors } from './src/theme/Theme';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={colors.primary} translucent={false} />
      <MainStack />
    </NavigationContainer>
  );
}

