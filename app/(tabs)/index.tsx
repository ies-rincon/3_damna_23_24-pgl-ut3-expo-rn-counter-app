import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { FAB } from "react-native-elements";

const Page1: React.FC<{ color: string }> = ({ color }) => {
  const [clickCounter, setClickCounter] = useState<number>(0);

  const handleRefresh = () => {
    setClickCounter(0);
  };

  const handleIncrement = () => {
    setClickCounter(clickCounter + 1);
  };

  const handleDecrement = () => {
    if (clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    }
  };

  const labelClick = clickCounter === 1 ? "Click" : "Clicks";

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Page 1 - Counter</Text>
        <Button
          icon={{ name: "refresh", type: "material", size: 30 }}
          onPress={handleRefresh}
          buttonStyle={styles.refreshButton}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.counterText}>{clickCounter}</Text>
        <Text style={styles.labelText}>{labelClick}</Text>
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
  );
};

interface CustomButtonProps {
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  onPress,
  disabled,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <FAB
        disabled={disabled}
        icon={{ name: icon, color: "white" }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  refreshButton: {
    backgroundColor: "transparent",
  },
  content: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 160,
    fontWeight: "100",
  },
  labelText: {
    fontSize: 25,
  },
  buttonsContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 5,
  },
  // customButton: {
  //   padding: 10,
  // },
});

export default Page1;
