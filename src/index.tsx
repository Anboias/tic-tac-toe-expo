import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, AppBootstrap } from "@components";

export default function App() {
  return (
    <AppBootstrap>
      <View style={styles.container}>
        <Text onPress={() => alert("Haha2")} style={{ fontSize: 25 }}>
          Hello World <Text weight="400">Text 2</Text>
        </Text>
      </View>
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
