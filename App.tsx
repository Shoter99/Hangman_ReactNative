import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const LIST_OF_IMGS = [
    require("./assets/img/hangman0.png"),
    require("./assets/img/hangman1.png"),
    require("./assets/img/hangman2.png"),
    require("./assets/img/hangman3.png"),
    require("./assets/img/hangman4.png"),
    require("./assets/img/hangman5.png"),
    require("./assets/img/hangman6.png"),
  ];
  const [imgPath, setImgPath] = useState(require("./assets/img/hangman0.png"));
  const [currentImgNumber, setCurrentImgNumber] = useState(0);

  const showNextImg = () => {
    setImgPath(LIST_OF_IMGS[currentImgNumber % 7]);
    setCurrentImgNumber(currentImgNumber + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Hangman </Text>
      <Image source={imgPath} />
      <TouchableOpacity onPress={showNextImg}>
        <Text>Next Img</Text>
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
});
