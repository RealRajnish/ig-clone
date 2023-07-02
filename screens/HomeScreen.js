import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default HomeScreen;
