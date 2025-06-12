"use client";

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Home,
  CreditCard,
  QrCode,
  Settings,
  User,
  Send,
  Download,
  Plus,
  Eye,
  EyeOff,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";
import type { Screen } from "@/app/page";
import { Ionicons } from "@expo/vector-icons";

interface DashboardScreenProps {
  navigation: any;
  userData: any;
}

export default function DashboardScreen({
  navigation,
  userData,
}: DashboardScreenProps) {
  const [showBalance, setShowBalance] = useState(true);

  const transactions = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      amount: "-$45.00",
      date: "Today",
      type: "sent",
    },
    {
      id: 2,
      name: "Coffee Shop",
      avatar: "CS",
      amount: "-$6.50",
      date: "Yesterday",
      type: "sent",
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "JW",
      amount: "+$120.00",
      date: "May 24",
      type: "received",
    },
    {
      id: 4,
      name: "Netflix",
      avatar: "NF",
      amount: "-$15.99",
      date: "May 23",
      type: "sent",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerIcon} />
          <View style={styles.headerIcon} />
          <Text style={styles.logo}>IrisPay</Text>
        </View>

        {/* My cards */}
        <View style={styles.cardsRow}>
          <Text style={styles.cardsLabel}>My cards</Text>
          <View style={styles.slider} />
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>$1200.49</Text>
          <Text style={styles.cardNumber}>..9124</Text>
          <Text style={styles.cardName}>Rajesh Kumar</Text>
        </View>

        {/* Razorpay Button */}
        <TouchableOpacity style={styles.razorpayBtn}>
          <Text style={styles.razorpayBtnText}>
            Manage your Razorpay account
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate("SendMoney")}
          >
            <Text style={styles.actionIcon}>↗️</Text>
            <Text style={styles.actionLabel}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>⬇️</Text>
            <Text style={styles.actionLabel}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.actionIcon}>⚙️</Text>
            <Text style={styles.actionLabel}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsRow}>
          <Text style={styles.transactionsLabel}>Recent Transactions</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabBtn}
          onPress={() => navigation.replace("Dashboard")}
        >
          <Ionicons name="home" size={24} color="#f7ce45" />
          <Text style={styles.tabActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBtnCenter}
          onPress={() => navigation.navigate("SendMoney")}
        >
          <Ionicons name="arrow-up" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBtn}
          onPress={() => navigation.replace("Profile")}
        >
          <Ionicons name="person" size={24} color="#f7ce45" />
          <Text style={styles.tabActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#23232a",
    borderRadius: 12,
    marginRight: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f7ce45",
    marginLeft: 20,
  },
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  cardsLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  slider: {
    flex: 1,
    height: 6,
    backgroundColor: "#f7ce45",
    borderRadius: 3,
    marginHorizontal: 10,
  },
  seeAll: {
    color: "#f7ce45",
    fontWeight: "bold",
    fontSize: 15,
  },
  balanceCard: {
    backgroundColor: "#f7ce45",
    borderRadius: 20,
    margin: 20,
    padding: 24,
    alignItems: "flex-start",
  },
  balanceLabel: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  balanceValue: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 8,
  },
  cardNumber: {
    color: "#222",
    fontSize: 16,
    marginBottom: 4,
  },
  cardName: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
  },
  razorpayBtn: {
    backgroundColor: "#f7ce45",
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    alignItems: "center",
  },
  razorpayBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: "#23232a",
    borderRadius: 12,
    alignItems: "center",
    padding: 16,
    marginHorizontal: 5,
  },
  actionIcon: {
    fontSize: 28,
    color: "#f7ce45",
    marginBottom: 8,
  },
  actionLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  transactionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  transactionsLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#23232a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#35353a",
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBtnCenter: {
    width: 60,
    height: 60,
    backgroundColor: "#f7ce45",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  tabActive: {
    color: "#f7ce45",
    marginTop: 4,
  },
});
