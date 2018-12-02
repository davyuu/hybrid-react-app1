import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Image
            style={styles.headerImage}
            resizeMode={"contain"}
            source={require("./assets/react-logo.png")}
          />
          <Text style={styles.appTitle}>Welcome to React Native Web️</Text>
          <Text style={styles.appSubtitle}>Vanilla Edition</Text>
        </View>
        <View style={{ alignItems: "center", flex: 3 }}>
          <Text style={styles.appIntro}>To get started, edit src/App.js and save to reload.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: 200,
    height: 200,
    flex: 3
  },
  appTitle: {
    flex: 1,
    fontSize: 16,
    color: "white"
  },
  appSubtitle: {
    color: "white"
  },
  appIntro: {
    flex: 3,
    fontSize: 30,
    textAlign: "center"
  }
});
