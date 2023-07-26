import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled11 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.dyoUvmHW} source={require("./RocketSim_Screenshot_iPhone_14_Pro_2023-07-25_17.38.17.jpeg")} resizeMode="center"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  dyoUvmHW: {
    width: 840,
    height: 560,
    position: "absolute",
    left: -242
  }
});
export default Untitled11;