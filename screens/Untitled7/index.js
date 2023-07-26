import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.lTYneecs} source={require("./RocketSim_Screenshot_iPhone_14_Pro_2023-07-25_17.39.32.jpeg")} resizeMode="center"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lTYneecs: {
    width: 700,
    height: 590,
    position: "absolute",
    left: -172,
    top: 26
  }
});
export default Untitled7;