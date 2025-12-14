import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainBar from "./components/mainBar";
import DisplayTimer from "./components/TimerDisplay";

export default function MainHomePage() {

  const [isRunning, setIsRunning] = useState(false);

  const handlePress = () => {
    setIsRunning(prev => !prev);
    console.log(isRunning ? "Stopped" : "Started");
  };

  const buttonText = isRunning ? "Stop" : "Start";
  const statusMessage = isRunning ? "Timer is running..." : "Timer is stopped.";

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.startButton}>
        <Text style={styles.startButtonText}>{buttonText}</Text>
      </TouchableOpacity>

      <Text style={styles.statusText}>{statusMessage}</Text>

      <DisplayTimer isRunning={isRunning} />

      <MainBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  startButton: {
    backgroundColor: "#000000",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800", // string form is safest
  },
  statusText: {
    marginBottom: 16,
  },
});