import { SafeAreaView } from "react-native";
import React, { useState, ReactElement } from "react";
import styles from "./single-player-game.style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Board } from "@components";
import {
  printFormattedBoard,
  isEmpty,
  isFull,
  getAvailableMoves,
  BoardState,
  isTerminal
} from "@utils";

type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayerGame">;
};

export default function Game({ navigation }: GameProps): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);

  const handleOnCellPressed = (cell: number) => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = "x";
    setState(stateCopy);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={!!isTerminal(state)}
          onCellPressed={cell => {
            handleOnCellPressed(cell);
          }}
          state={state}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
