import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.aJmffTTX} source={require("./Screenshot 2023-07-25 at 20.19.50.png")} resizeMode="center"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  aJmffTTX: {
    width: 800,
    height: 634,
    position: "absolute",
    left: -222,
    top: 10
  }
});
export default Untitled8;