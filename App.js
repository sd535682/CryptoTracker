import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import ListCards from "./components/ListCard";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
          }}>
          <Image
            source={require("./assets/polygon.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text
            style={{
              color: "cadetblue",
              fontSize: 35,
              fontWeight: "bold",
            }}>
            Crypto Tracker
          </Text>
        </View>
        <ListCards />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#0c1b14",
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#0c1b14",
    justifyContent: "center",
  },
});
