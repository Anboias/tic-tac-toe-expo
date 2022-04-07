import { ScrollView, Image, View } from "react-native";
import React from "react";
import styles from "./home.style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground } from "@components";
import { Button } from "@components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps) {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("@assets/logo.png")} style={styles.logo} />
        <View style={styles.buttons}>
          <Button style={styles.button} title="Single Player" />
          <Button style={styles.button} title="Multiplayer" />
          <Button style={styles.button} title="Login" />
          <Button style={styles.button} title="Settings" />
        </View>

        {/* <Text>Home</Text>
        <Button title="Game" onPress={() => navigation.navigate("Game", { gameId: "455" })} /> */}
      </ScrollView>
    </GradientBackground>
  );
}
