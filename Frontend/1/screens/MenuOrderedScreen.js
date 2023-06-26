import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinkText from "../components/LinkText";
import { Ionicons } from "@expo/vector-icons";

const MenuOrderedScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate("Category", { category });
  };

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text
        style={{
          color: "#F7941D",
          textAlign: "center",
          marginTop: 50,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Choose Kigali
      </Text>
      <View style={styles.topNav}>
        <TouchableOpacity style={{ paddingRight: 30 }}>
          <Image source={require("../assets/orderIcon.png")} />
          <Text style={{ color: "white" }}>N8</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Ordered
          </Text>
        </TouchableOpacity>
        <View style={{ width: 1, height: 70, backgroundColor: "#F7941D" }} />
        <TouchableOpacity style={{ paddingLeft: 30 }}>
          <Image source={require("../assets/waiterIcon.png")} />
          <Text style={{ color: "white", fontSize: 15 }}>Call waiter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.menuHeader}>Menu</Text>
      {/* List of menu categories */}
      <TouchableOpacity
        onPress={() => handleCategoryPress("Appetizer")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Appetizer</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCategoryPress("Starter")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Starter</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCategoryPress("Main")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Main</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCategoryPress("Dessert")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Dessert</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCategoryPress("Fruits")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Fruits</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCategoryPress("Drinks")}
        style={styles.menuItem}
      >
        <Text style={styles.itemText}>Drinks</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={{ color: "white", paddingRight: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  menuHeader: {
    color: "#F7941D",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 20,
  },
  menuItem: {
    color: "white",
    fontSize: 20,
    padding: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    paddingLeft: 50,
    fontSize: 17,
    color: "white",
  },
});

export default MenuOrderedScreen;
