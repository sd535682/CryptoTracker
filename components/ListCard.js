import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import Coins from "./Coins";

const ListCards = () => {
  const [btc, setBTC] = useState([]);

  useEffect(() => {
    const coindata = () => {
      fetch(`https://api.coincap.io/v2/assets`)
        .then((res) => res.json())
        .then((data) => setBTC(data.data));
    };
    coindata();
    const interval = setInterval(() => {
      coindata();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Coins
        key={item.id}
        symbol={item.symbol}
        changePercent24Hr={item.changePercent24Hr}
        priceUsd={item.priceUsd}
      />
    );
  };
  return (
    <FlatList
      data={btc}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListCards;
