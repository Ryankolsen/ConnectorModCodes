import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts } from "expo-font";

function Header() {
  const [loaded] = useFonts({
    Caveat: require("../fonts/Caveat.ttf"),
  });

  const styles = StyleSheet.create({
    headerText: {
      fontSize: 40,
      fontFamily: "Caveat",
    },
  });

  if (!loaded) {
    return <Text>Please Wait</Text>;
  }
  {
    return (
      <View>
        <Text style={styles.headerText}>Connector Modification List </Text>
      </View>
    );
  }
}

export default Header;
