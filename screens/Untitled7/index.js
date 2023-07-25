import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const Untitled7 = () => {
  const {
    entities: UserDetails
  } = useSelector(state => state.UserDetails);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.instructions}>Please wait while we load your data...</Text>
        <ActivityIndicator style={styles.activityIndicator} data={UserDetails}></ActivityIndicator>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  instructions: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  activityIndicator: {
    width: 50,
    height: 50
  }
});
export default Untitled7;