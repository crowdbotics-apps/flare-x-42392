import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{
      flexDirection: "row",
      flex: 1
    }}>
        <View style={styles.MdveuZKP}><View style={styles.group} /></View>
        <View style={styles.idTUCmyI}><View style={styles.group}>
          <Image style={styles.logo} source={require("./flare-x.png")} resizeMode="center" />
          <Text style={styles.text}>{"Real AI. Real Empowerment."}</Text>
        </View></View>
        <View style={styles.dcTJeeXs}></View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 166,
    width: 172,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  idTUCmyI: {
    flex: 1
  },
  MdveuZKP: {
    flex: 1
  },
  dcTJeeXs: {
    flex: 1
  }
});
export default WelcomeScreen;