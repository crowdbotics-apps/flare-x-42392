import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.jvMYMOaL} source={require("./Screenshot 2023-07-25 at 17.01.44.png")} resizeMode="contain"></ImageBackground><ImageBackground style={styles.OotOkbTq} source={require("./Screenshot 2023-07-25 at 17.01.44.png")} resizeMode="center"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  jvMYMOaL: {},
  OotOkbTq: {
    width: 550,
    height: 618,
    position: "absolute",
    top: 9,
    left: -110,
    transform: [{
      rotate: "0deg"
    }]
  }
});
export default Untitled9;