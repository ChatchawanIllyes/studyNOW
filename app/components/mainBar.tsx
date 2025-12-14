import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6, // smaller bar
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.06)",
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 14,
    minHeight: 48, // comfortable touch target
    minWidth: 48,

    borderRadius: 14,
    maxWidth: 120,
  },
  icon: {
    marginBottom: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default function MainBar() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <TouchableOpacity
        accessible
        accessibilityRole="button"
        accessibilityLabel="Home tab"
        accessibilityHint="Navigate to Home"
        onPress={() => console.log("Home pressed")}
        style={styles.buttonWrapper}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        activeOpacity={0.75}
      >
        <View style={styles.touchable}>
          <Ionicons
            name="home-outline"
            size={22}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessible
        accessibilityRole="button"
        accessibilityLabel="Groups tab"
        accessibilityHint="Open Groups"
        onPress={() => console.log("Groups pressed")}
        style={styles.buttonWrapper}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        activeOpacity={0.75}
      >
        <View style={styles.touchable}>
          <Ionicons
            name="people-outline"
            size={22}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Groups</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessible
        accessibilityRole="button"
        accessibilityLabel="Settings tab"
        accessibilityHint="Open Settings"
        onPress={() => console.log("Settings pressed")}
        style={styles.buttonWrapper}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        activeOpacity={0.75}
      >
        <View style={styles.touchable}>
          <Ionicons
            name="settings-outline"
            size={22}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Settings</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
