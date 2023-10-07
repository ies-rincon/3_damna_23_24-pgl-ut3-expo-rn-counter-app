import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-elements";
import { styles } from "./one.styles";

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  onPress,
  disabled,
}) => (
  <View style={styles.buttonContainer}>
    <FAB
      disabled={disabled}
      icon={{ name: icon, color: "white" }}
      onPress={onPress}
    />
  </View>
);
