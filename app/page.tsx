"use client"

import { useState } from "react"
import { MobileLayout } from "@/components/mobile-layout"
import { SplashScreen } from "@/components/screens/splash-screen"
import { OnboardingScreen } from "@/components/screens/onboarding-screen"
import { LoginScreen } from "@/components/screens/login-screen"
import { RegisterScreen } from "@/components/screens/register-screen"
import { BiometricScreen } from "@/components/screens/biometric-screen"
import { DashboardScreen } from "@/components/screens/dashboard-screen"
import { SendMoneyScreen } from "@/components/screens/send-money-screen"
import { SendAmountScreen } from "@/components/screens/send-amount-screen"
import { ReceiveMoneyScreen } from "@/components/screens/receive-money-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { SettingsScreen } from "@/components/screens/settings-screen"
import { TransactionHistoryScreen } from "@/components/screens/transaction-history-screen"

export type Screen =
  | "splash"
  | "onboarding"
  | "login"
  | "register"
  | "biometric"
  | "dashboard"
  | "send-money"
  | "send-amount"
  | "receive-money"
  | "profile"
  | "settings"
  | "transaction-history"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash")
  const [userData, setUserData] = useState<any>({})

  const navigateToScreen = (screen: Screen, data?: any) => {
    if (data) {
      setUserData({ ...userData, ...data })
    }
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onNavigate={navigateToScreen} />
      case "onboarding":
        return <OnboardingScreen onNavigate={navigateToScreen} />
      case "login":
        return <LoginScreen onNavigate={navigateToScreen} />
      case "register":
        return <RegisterScreen onNavigate={navigateToScreen} />
      case "biometric":
        return <BiometricScreen onNavigate={navigateToScreen} />
      case "dashboard":
        return <DashboardScreen onNavigate={navigateToScreen} userData={userData} />
      case "send-money":
        return <SendMoneyScreen onNavigate={navigateToScreen} />
      case "send-amount":
        return <SendAmountScreen onNavigate={navigateToScreen} />
      case "receive-money":
        return <ReceiveMoneyScreen onNavigate={navigateToScreen} />
      case "profile":
        return <ProfileScreen onNavigate={navigateToScreen} userData={userData} />
      case "settings":
        return <SettingsScreen onNavigate={navigateToScreen} />
      case "transaction-history":
        return <TransactionHistoryScreen onNavigate={navigateToScreen} />
      default:
        return <SplashScreen onNavigate={navigateToScreen} />
    }
  }

  return <MobileLayout>{renderScreen()}</MobileLayout>
}
