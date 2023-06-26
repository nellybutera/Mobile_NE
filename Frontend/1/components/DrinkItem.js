import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const DrinkItem = ({ drink, onUpdateTotal }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddDrink = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    onUpdateTotal(drink.price, updatedQuantity);
  };

  const handleRemoveDrink = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      onUpdateTotal(-drink.price, updatedQuantity);
    }
  };

  return (
    <View style={styles.drinkContainer}>
      <Image source={drink.image} style={styles.drinkImage} />
      <Text style={styles.textContainer}>
        <Text style={{ fontSize: 13, fontWeight: "bold", width: "90%" }}>
          {drink.name}
        </Text>
        {"\n"}
        <Text style={{ fontSize: 10 }}>{drink.description}</Text>
        {"\n"}
        <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <View style={{ paddingRight: 110 }}>
            <Text style={{ color: "#F7941D", fontWeight: "bold" }}>
              Frw {drink.price}
            </Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity onPress={handleRemoveDrink}>
              {/* <Entypo name="minus" size={15}/> */}
              <Feather name="minus" size={15}/>
            </TouchableOpacity>
            <Text style={{ color: "#F7941D" }}>{quantity}</Text>
            <TouchableOpacity onPress={handleAddDrink}>
                <Entypo name="plus" size={15}/>
            </TouchableOpacity>
          </View>
        </View>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    drinkContainer: {
        backgroundColor: '#F8F8FB',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 5,
        width: '95%',
        marginLeft: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    drinkImage: {
        width: 55,
        height: 55,
        borderRadius: 11,
    },
    textContainer: {
        marginLeft: 14,
        width: '85%',
    },
    counter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: 60,
        height: 20,
        borderRadius: 5,
        // paddingHorizontal: 10,
    }
})

export default DrinkItem;