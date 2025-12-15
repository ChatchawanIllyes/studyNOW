import React, { useState } from "react";
import { StyleSheet,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainBar from "./components/mainBar";
import DisplayTimer from "./components/TimerDisplay";

export default function MainHomePage() {

  

  return (
    <SafeAreaView style={styles.container}>
        <DisplayTimer/>
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
});