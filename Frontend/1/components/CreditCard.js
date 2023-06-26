import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { COLORS, normalize, SIZES } from "../constants/themes";
import { Formik, ErrorMessage } from "formik";

const CreditCard = () => {
  return (
    <View
      style={{
        marginBottom: 10,
        marginTop: 60,
        marginHorizontal: 20,
        width: "100%",
      }}
    >
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          expiryDate: "",
          cv: "",
        }}
        //   validationSchema={}
        onSubmit={(values, { setSubmitting }) => {
          handle(values, setSubmitting);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
          <View style={{ width: "100%", marginHorizontal: 5 }}>
            <CustomTextInput
              label="Card Number"
              name="title"
              placeholder="5261   4141   0151   8472"
              placeholderTextColor={COLORS.inputGray}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              isCardNumber={true}
              value={values.title}
              style={[styles.input, { width: "100%" }]}
            />

            <CustomTextInput
              label="Card holder name"
              name="title"
              placeholder="Jack KAGABO"
              placeholderTextColor={COLORS.inputGray}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={[styles.input, { width: "100%" }]}
            />

            <View
              style={{ width: "90%", display: "flex", flexDirection: "row" }}
            >
              <CustomTextInput
                label="Expiry date"
                name="title"
                placeholder="06   /   2024"
                placeholderTextColor={COLORS.inputGray}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                isSmallInput={true}
                value={values.title}
                style={[styles.input, { width: "100%" }]}
              />

              <CustomTextInput
                label="CVV / CVC"
                name="title"
                placeholder="915"
                placeholderTextColor={COLORS.inputGray}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                isSmallInput={true}
                value={values.title}
                style={[styles.input, { width: "100%" }]}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const CustomTextInput = ({
  name,
  label,
  isCardNumber,
  isSmallInput,
  ...props
}) => (
  <View
    style={{
      width: isSmallInput ? "35%" : "85%",
      marginBottom: 10,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Text style={styles.label}>{label}</Text>
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <TextInput {...props} />
      {isCardNumber && (
        <View
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: -100,
            marginTop: 10,
          }}
        >
        
          <Image source={require("../assets/card.png")} style={{marginLeft:30}} resizeMode="cover" />
        </View>
      )}
    </View>

    <ErrorMessage
      name={name}
      render={(msg) => <Text style={{ color: COLORS.red }}>{msg}</Text>}
      style={styles.errorMessage}
    />
  </View>
);

const styles = StyleSheet.create({
  label: {
    color: COLORS.black,
    fontSize: 17,
  },

  input: {
    // padding: SIZES.padding,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    borderRadius: 13,
    backgroundColor: "#F8F8FB",
    height: 55,
    color: COLORS.black,
    fontSize: 16,
  },
  errorMessage: {
    marginTop: SIZES.padding * 3,
    marginLeft: 30,
  },
  errorMsgBox: {
    backgroundColor: COLORS.lightRed,
    width: "80%",
    height: 50,
    borderRadius: 5,
    // marginTop: SIZES.padding * 2,
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 30,
  },
});

export default CreditCard;
