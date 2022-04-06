import { Button, View, Text } from "react-native";
import React from "react";
import styles from "./game.style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Game">;
};

export default function Game({ navigation }: GameProps) {
  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
