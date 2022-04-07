import { SafeAreaView } from "react-native";
import React, { ReactElement } from "react";
import styles from "./single-player-game.style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Board } from "@components";
import { printFormattedBoard } from "@utils";

type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
};

export default function Game({ navigation }: GameProps): ReactElement {
  printFormattedBoard(["x", "o", null, "x", "o", null, "x", "o", null]);
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          onCellPressed={(index: number) => {
            alert(index);
          }}
          state={["x", "o", null, "x", "o", null, "x", "o", null]}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
