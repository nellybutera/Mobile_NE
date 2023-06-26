import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../constants/colors";
import ToggleButton from "../components/ToggleButtons";
import { COLORS, normalize, SIZES } from "../constants/themes";
import CreditCard from "../components/CreditCard";
import MomoOptions from "../components/Momo"

const CheckoutScreen = ({ navigation }) => {
  const [isCreditCard, setIsCreditCard] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleCreditCardSelection = () => {
    setIsCreditCard(true);
    setIsMobile(false);
  };

  const handleMobileSelection = () => {
    setIsMobile(true);
    setIsCreditCard(false);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.backIcon}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color={colors.GREENER}
          onPress={handleGoBack}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.paymentMethodsContainer}>
          <View style={styles.paymentAmountDetails}>
            <Text style={{ fontSize: 22, color: colors.BLACK }}>Checkout</Text>
            <View>
              <Text style={{ color: colors.GREENER, fontSize: 22 }}>
                Frw 16,000
              </Text>
              <Text style={{ color: colors.GRAY }}>Including VAT{`(18%)`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.toggleBtnContainer}>
          <ToggleButton
            text1={"Credit card"}
            text2={"Mobile & Cash"}
            btn1Active={isCreditCard}
            btn2Active={isMobile}
            onPress1={() => handleCreditCardSelection()}
            onPress2={() => handleMobileSelection()}
          />
        </View>
        <View style={styles.paymentInputsContainer}>
          {isCreditCard && (<><CreditCard/></>)}
          {isMobile && <><MomoOptions/></>}
        </View>
        <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('Success')} >
            <Image source={require('../assets/lock.png')} resizeMode="cover" style={{marginRight: 15}} />
            <Text style={{ color: COLORS.white, fontSize:14 }}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        maxHeight: "100%",
    },

    backIcon: {
        backgroundColor: "#f8f8fb",
        width: 40,
        height: 40,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        marginLeft: "4%",
        marginTop: "12%",
    },
    customTInput: {
        backgroundColor: colors.WHITE,
    },
    container: {
        padding: 10,
        marginLeft: "1%",
    },
    paymentMethodsContainer: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: colors.LIGHTGRAY,
        backgroundColor: "#fff",
        padding: 20,
        height: 120,
        shadowColor: colors.GRAY,
        shadowOffset: {
        width: 1.0,
        height: 1.0,
        },
        shadowOpacity: 1.0,
        shadowRadius: 25.0,
        elevation: 10,
    },
    paymentAmountDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
    },
    toggleBtnContainer: {
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative",
        top: "-10%",
        left: 16,
    },
    paymentInputsContainer: {
        // marginTop: 10,
        // marginLeft: 4,
        // marginVertical: 3,
    },
    img: {
        width: 80,
        height: 60,
    },
    // mobileOptions: {
    //     flexDirection: "row",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     marginVertical: 10,
    // },
    txt: {
        fontSize: 20,
    },
    paymentButton: {
        width: "90%",
        marginHorizontal: 20,
        padding: SIZES.padding,
        backgroundColor: '#25D482',
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        height:45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30
    }

});

export default CheckoutScreen;
