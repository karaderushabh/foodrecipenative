import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";

const HomeScreen = ({ isLoggedIn, onLogout }) => {
  return (
    <View style={styles.container}>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Text style={styles.welText}>Welcome to Food Recipe App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    // justifyContent: "center",
  },
  welText: {
    paddingTop: "10%",
  },
});

export default HomeScreen;
