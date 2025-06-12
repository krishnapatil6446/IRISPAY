"use client";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SendMoneyScreen({ navigation }: any) {
  const [amount, setAmount] = useState("500");
  const [currency, setCurrency] = useState("USD");

  return (
    <View style={styles.outerContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.headerBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#f7ce45" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Make Payment</Text>
      </View>

      {/* Recipient Card */}
      <View style={styles.recipientCard}>
        <View style={styles.recipientRow}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.payToLabel}>Paying to</Text>
            <Text style={styles.payToName}>Manish Kumar</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.payFromRow}>
          <Text style={styles.payFromLabel}>Pay from</Text>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color="#f7ce45"
            style={styles.payFromCheck}
          />
          <Image
            source={require("../../assets/mastercard.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardNumber}>..9124</Text>
          <Image
            source={require("../../assets/razorpay.png")}
            style={styles.razorpayIcon}
          />
        </View>
      </View>

      {/* Amount Card */}
      <View style={styles.amountCard}>
        <Text style={styles.amountHeader}>Enter Amount to Transfer</Text>
        <View style={styles.amountInputRow}>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.currencyBtn}>
            <Text style={styles.currencyText}>{currency}</Text>
            <Ionicons name="chevron-down" size={16} color="#888" />
          </TouchableOpacity>
        </View>
        <View style={styles.rateRow}>
          <Ionicons name="time-outline" size={20} color="#888" />
          <Text style={styles.liveRateLabel}>Live Google Rate</Text>
          <Text style={styles.liveRateValue}>1 USD = 83.88 INR</Text>
        </View>
        <Text style={styles.rateDesc}>
          The exchange rate between USD (United States Dollar) and INR (Indian
          Rupee) fluctuates based on various factors including market demand,
          economic conditions, and geopolitical events.
        </Text>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedBtn}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabBtn}
          onPress={() => navigation.replace("Dashboard")}
        >
          <Ionicons name="home" size={24} color="#f7ce45" />
          <Text style={styles.tabActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtnCenter}>
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
  outerContainer: {
    flex: 1,
    backgroundColor: "#18181b",
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerBack: {
    width: 48,
    height: 48,
    backgroundColor: "#23232a",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  headerTitle: {
    color: "#f7ce45",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
  },
  recipientCard: {
    backgroundColor: "#35353a",
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
  },
  recipientRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#f7ce45",
    marginRight: 16,
  },
  payToLabel: {
    color: "#fff",
    fontSize: 14,
  },
  payToName: {
    color: "#f7ce45",
    fontWeight: "bold",
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#888",
    marginVertical: 10,
    opacity: 0.3,
  },
  payFromRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  payFromLabel: {
    color: "#fff",
    fontSize: 16,
    marginRight: 8,
  },
  payFromCheck: {
    marginRight: 8,
  },
  cardIcon: {
    width: 32,
    height: 20,
    resizeMode: "contain",
    marginRight: 8,
  },
  cardNumber: {
    color: "#fff",
    marginRight: 8,
  },
  razorpayIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  amountCard: {
    backgroundColor: "#35353a",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
  },
  amountHeader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  amountInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  amountInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#23232a",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 24,
    marginRight: 10,
  },
  currencyBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23232a",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  currencyText: {
    color: "#fff",
    marginRight: 5,
  },
  rateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  liveRateLabel: {
    color: "#888",
    marginLeft: 8,
    marginRight: 8,
  },
  liveRateValue: {
    color: "#f7ce45",
  },
  rateDesc: {
    color: "#888",
    fontSize: 12,
    lineHeight: 18,
  },
  proceedBtn: {
    backgroundColor: "#f7ce45",
    marginHorizontal: 20,
    marginVertical: 20,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  proceedText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
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
