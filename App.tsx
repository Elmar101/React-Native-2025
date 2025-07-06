import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const { width, height } = Dimensions.get("window");
  console.log("Window dimensions:", { width, height });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={{ borderWidth: 2, width: width * 0.9 }}>Open up </Text>
      <Text>Open </Text>
      <Button title="Press Me" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me TouchableOpacity</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "80%",
  },
});
