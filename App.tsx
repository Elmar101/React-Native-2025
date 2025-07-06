import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";

const img1 = require("./assets/img1.png");
const img2 = require("./assets/img2.png");
const imgUri = 'https://www.visual-craft.com/strapi/uploads/React_Native_2_c5ab49be9b.png';


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

      <Image
        source={img1}
        style={styles.image}
      />

      <Image
        source={{uri: imgUri}}
        style={styles.image}
      />

      <ImageBackground
        source={img2}
        style={styles.imageBackground}
      >
        <Text style={styles.imgBgText}>Hello from ImageBackground</Text>
      </ImageBackground>
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
  image: {
    width: "90%",
    height: 100,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 10
  },
  imageBackground: {
    width: "90%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  imgBgText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  listItemText: {
    fontSize: 18,
    color: "#333",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,    
  },
});
