import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";
import colors from "../constants/colors"

const RestaurantItem = ({ restaurant, navigation }) => {
  return (
    <View style={styles.restaurantContainer}>
      <View style={styles.restoItem}>
        <Image source={restaurant.image} style={styles.restoImage}/>
      </View>
      <View style={styles.textContainer}>
        <Text
            style={styles.restaurantTitle}
            onPress={() => navigation.navigate("MenuOrdered")}
          >
            {restaurant.title}
        </Text>
        <Text style={styles.restoDescription}>
          {restaurant.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    height:74,
    width:'90%',
    marginBottom:12,
    marginLeft:'3%',
    backgroundColor: colors.LIGHTGRAY,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    padding: 7,
    paddingLeft:10
  },
  textContainer: {
    marginLeft: 10,
    padding: 5,
  },
  restoItem:{
    height:'30%',
  },
  restoImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
  },
  restaurantTitle: {
    fontSize: 14,
    color: colors.DARKERGRAY,
    fontWeight: "bold",
  },
  restoDescription: {
    fontSize: 12,
    color: colors.DARKGRAY
  },
});

export default RestaurantItem;
