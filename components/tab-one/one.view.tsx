import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./one.styles";
import { CustomButton } from "./one.components";

const PageOneView: React.FC<PageOneViewProps> = ({
  color,
  clickCounter,
  handleRefresh,
  handleIncrement,
  handleDecrement,
}) => (
  <>
    <View style={styles.header}>
      <Text style={styles.headerText}>Page 1 - Counter</Text>
      <Button
        icon={{ name: "refresh", type: "material", size: 30 }}
        onPress={handleRefresh}
        buttonStyle={styles.refreshButton}
      />
    </View>
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.content}>
        <Text style={styles.counterText}>{clickCounter}</Text>
        <Text style={styles.labelText}>
          {clickCounter === 1 ? "Click" : "Clicks"}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton icon="refresh" onPress={handleRefresh} />
        <CustomButton icon="plus-one" onPress={handleIncrement} />
        <CustomButton
          icon="exposure-minus-1"
          onPress={handleDecrement}
          disabled={clickCounter === 0}
        />
      </View>
    </View>
  </>
);
export default PageOneView;
