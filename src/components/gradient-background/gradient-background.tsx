import { View } from "react-native";
import React, { ReactNode, ReactElement } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function GradientBackground({ children }: { children: ReactNode }): ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#120318", "#221a36"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children}
    </View>
  );
}
