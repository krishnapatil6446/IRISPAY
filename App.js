import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/screens/login-screen';
import RegisterScreen from './components/screens/register-screen';
import DashboardScreen from './components/screens/dashboard-screen';
import ProfileScreen from './components/screens/profile-screen';
import SettingsScreen from './components/screens/settings-screen';
import SendMoneyScreen from './components/screens/send-money-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 