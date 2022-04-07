import { Button, Text, SafeAreaView } from "react-native";
import React, { ReactElement } from "react";
import styles from "./single-player-game.style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground } from "@components";

type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
};

export default function Game({ navigation }: GameProps): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "#fff" }}>Game</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </SafeAreaView>
    </GradientBackground>
  );
}
