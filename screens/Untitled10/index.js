import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.fkPXvzpq} source={require("./Screenshot 2023-07-25 at 17.33.00.png")} resizeMode="center"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  fkPXvzpq: {
    width: 710,
    height: 519,
    position: "absolute",
    left: -177
  }
});
export default Untitled10;