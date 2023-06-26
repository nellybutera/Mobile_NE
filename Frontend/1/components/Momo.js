import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors"

const MomoOptions = () => {
  const [selectedMomoOption, setSelectedMomoOption] = useState(2);

  const momoOptions = [
    {
      id: 1,
      image: require("../assets/mtn.png"),
      name: "MTN Mobile Money",
    },

    {
      id: 2,
      image: require("../assets/airtel.png"),
      name: "Airtel Money",
    },

    {
      id: 3,
      image: require("../assets/cash.png"),
      name: "Cash",
    },
  ];

  const MomoListItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.momoOption}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width: "30%", padding: 16, marginRight: 20 }}
        />
        <Text style={{ fontSize: 17 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity
      style={{
        // marginTop: 70,
        // marginBottom: 10,
        marginHorizontal: 10,
        width: "95%",
        backgroundColor:colors.WHITE,
        height: "70%",
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={momoOptions}
        renderItem={({ item }) => <MomoListItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  momoOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20, //use padding for height
    width: "100%",
  },
});

export default MomoOptions;
