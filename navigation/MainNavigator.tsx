import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";

// Import screens
import DashboardScreen from "../components/screens/dashboard-screen";
import SendMoneyScreen from "../components/screens/send-money-screen";
import ReceiveMoneyScreen from "../components/screens/receive-money-screen";
import ProfileScreen from "../components/screens/profile-screen";
import SettingsScreen from "../components/screens/settings-screen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={SendMoneyScreen}
        options={{
          tabBarLabel: "Send",
        }}
      />
      <Tab.Screen
        name="Receive"
        component={ReceiveMoneyScreen}
        options={{
          tabBarLabel: "Receive",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}
