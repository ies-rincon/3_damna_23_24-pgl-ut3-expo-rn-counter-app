import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
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
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
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
    flexDirection: "column-reverse",
    alignItems: "flex-end",
    marginTop: 5,
  },
});
