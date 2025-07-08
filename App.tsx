import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";

const img1 = require("./assets/img1.png");
const img2 = require("./assets/img2.png");
const imgUri =
  "https://www.visual-craft.com/strapi/uploads/React_Native_2_c5ab49be9b.png";

const { width } = Dimensions.get("window");

const flatListData = [
  {
    id: "1",
    title: "Item 1",
    description: "Description for Item 1",
  },
  {
    id: "2",
    title: "Item 2",
    description: "Description for Item 2",
  },
  {
    id: "3",
    title: "Item 3",
    description: "Description for Item 3",
  },
  {
    id: "4",
    title: "Item 4",
    description: "Description for Item 4",
  },
  {
    id: "5",
    title: "Item 5",
    description: "Description for Item 5",
  },
  {
    id: "6",
    title: "Item 6",
    description: "Description for Item 6",
  },
  {
    id: "7",
    title: "Item 7",
    description: "Description for Item 7",  
  },
];

export default function App() {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!", [
      { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.text}>
            Open up App.tsx to start working on your app!
          </Text>
          <Button title="Press Me" onPress={handlePress} />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Press Me TouchableOpacity</Text>
          </TouchableOpacity>

          <Image source={img1} style={styles.image} />

          <Image
            source={{ uri: imgUri }}
            style={[styles.image, { width: width * 0.9, height: 200 }]}
          />

          <ImageBackground
            source={img2}
            style={{
              ...styles.imageBackground,
              width: width * 0.9,
              height: 200,
            }}
          >
            <Text style={styles.imgBgText}>Hello from ImageBackground</Text>
          </ImageBackground>

          {Array.from({ length: 70 }).map((_, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>Item {index + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 70 }).map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.letter}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.flatListItem}>
            <Text style={styles.flatListItemText}>{item.title}</Text>
            <Text style={styles.flatListItemText}>{item.description}</Text>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
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
    cursor: "pointer",
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
    width: width * 0.9,
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 10,
  },
  imageBackground: {
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
  horizontalList: {
    paddingVertical: 20,
    marginVertical: 20,
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#007BFF",
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  letter: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  flatList: {
    paddingVertical: 20,
  },
  flatListItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  flatListItemText: {
    fontSize: 18,
    color: "#333",
  },
});
