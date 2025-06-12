import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";

// Import screens
import SplashScreen from "../components/screens/splash-screen";
import LoginScreen from "../components/screens/login-screen";
import RegisterScreen from "../components/screens/register-screen";
import BiometricScreen from "../components/screens/biometric-screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="IrisSetup" component={BiometricScreen} />
    </Stack.Navigator>
  );
}
