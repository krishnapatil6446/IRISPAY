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

export default function SettingsScreen({ navigation, userData }: any) {
  const [shareLink, setShareLink] = useState("https://pay.example.com");

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerIcon}>
            <Text style={styles.headerBell}>🔔</Text>
          </View>
          <View style={styles.headerIcon}>
            <Text style={styles.headerSearch}>🔍</Text>
          </View>
          <Text style={styles.logo}>Settings</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Rajesh Kumar</Text>
            <Text style={styles.profileEmail}>rajeshkumar@gmail.com</Text>
            <Text style={styles.profilePhone}>+91 9876543210</Text>
          </View>
          <Text style={styles.profileDropdown}>▼</Text>
        </View>

        {/* Security Settings */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeader}>Security Settings</Text>
          <TouchableOpacity style={styles.sectionBtn}>
            <Text style={styles.sectionBtnText}>
              Manage your Iris authentication
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBtn}>
            <Text style={styles.sectionBtnText}>
              Manage your Fingerprint authentication
            </Text>
          </TouchableOpacity>
        </View>

        {/* Notification Settings */}
        <View style={styles.sectionRow}>
          <View style={styles.sectionIconBox}>
            <Text style={styles.headerBell}>🔔</Text>
          </View>
          <Text style={styles.sectionNotif}>Notification Settings</Text>
        </View>

        {/* Change Shareable Link */}
        <View style={styles.shareBox}>
          <Text style={styles.shareLabel}>Change Shareable Link!</Text>
          <View style={styles.shareRow}>
            <TextInput
              style={styles.shareInput}
              value={shareLink}
              onChangeText={setShareLink}
            />
            <TouchableOpacity style={styles.shareBtn}>
              <Text style={styles.shareBtnText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  outerContainer: {
    flex: 1,
    backgroundColor: "#18181b",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#23232a",
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBell: {
    fontSize: 22,
    color: "#f7ce45",
  },
  headerSearch: {
    fontSize: 22,
    color: "#f7ce45",
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f7ce45",
    marginLeft: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#44444a",
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#f7ce45",
    marginRight: 16,
  },
  profileName: {
    color: "#f7ce45",
    fontWeight: "bold",
    fontSize: 16,
  },
  profileEmail: {
    color: "#fff",
    fontSize: 14,
  },
  profilePhone: {
    color: "#fff",
    fontSize: 14,
  },
  profileDropdown: {
    color: "#f7ce45",
    fontSize: 18,
    marginLeft: 8,
  },
  sectionBox: {
    backgroundColor: "transparent",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  sectionHeader: {
    backgroundColor: "#f7ce45",
    color: "#222",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
  },
  sectionBtn: {
    backgroundColor: "#44444a",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  sectionBtnText: {
    color: "#fff",
    fontSize: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionIconBox: {
    width: 48,
    height: 48,
    backgroundColor: "#23232a",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  sectionNotif: {
    color: "#f7ce45",
    fontWeight: "bold",
    fontSize: 18,
  },
  shareBox: {
    backgroundColor: "transparent",
    borderColor: "#f7ce45",
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
  },
  shareLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareInput: {
    flex: 1,
    backgroundColor: "#23232a",
    color: "#f7ce45",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  shareBtn: {
    backgroundColor: "#23232a",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  shareBtnText: {
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
