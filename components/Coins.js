import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Coins = ({ symbol, changePercent24Hr, priceUsd }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}>
        <Image
          source={{
            uri: `https://assets.coincap.io/assets/icons/${symbol?.toLowerCase()}@2x.png`,
          }}
          style={{ width: 64, height: 64 }}
        />
        {parseFloat(changePercent24Hr) > 0 ? (
          <Text
            style={{ color: "limegreen", fontWeight: "bold", fontSize: 25 }}>
            +{parseFloat(changePercent24Hr).toFixed(5)}%
          </Text>
        ) : (
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 25 }}>
            {parseFloat(changePercent24Hr).toFixed(5)}%
          </Text>
        )}
      </View>
      <View>
        <Text style={{ color: "white", opacity: 0.8, fontSize: 15 }}>
          {symbol?.toUpperCase()}
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          {parseFloat(priceUsd).toFixed(5)}
        </Text>
      </View>
    </View>
  );
};

export default Coins;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#244b4e",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
});
