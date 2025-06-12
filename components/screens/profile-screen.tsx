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

interface ProfileScreenProps {
  navigation: any;
  userData: any;
}

export default function ProfileScreen({
  navigation,
  userData,
}: ProfileScreenProps) {
  const [shareLink, setShareLink] = useState("https://pay.example.com");

  const menuItems = [
    { icon: "person", label: "Personal Information", action: () => {} },
    { icon: "card", label: "Payment Methods", action: () => {} },
    { icon: "shield-checkmark", label: "Security & Privacy", action: () => {} },
    { icon: "notifications", label: "Notifications", action: () => {} },
    { icon: "help-circle", label: "Help & Support", action: () => {} },
  ];

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerIcon}>
            <Ionicons name="notifications" size={24} color="#f7ce45" />
          </View>
          <View style={styles.headerIcon}>
            <Ionicons name="search" size={24} color="#f7ce45" />
          </View>
          <Text style={styles.logo}>IrisPay</Text>
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
          <Ionicons name="chevron-down" size={24} color="#f7ce45" />
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
            <Ionicons name="notifications" size={24} color="#f7ce45" />
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
              placeholderTextColor="#888"
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  shareBox: {
    backgroundColor: "#44444a",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
  },
  shareLabel: {
    color: "#f7ce45",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#23232a",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginRight: 10,
  },
  shareBtn: {
    backgroundColor: "#f7ce45",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  shareBtnText: {
    color: "#000",
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
