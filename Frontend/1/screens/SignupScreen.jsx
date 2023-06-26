import React, { useState } from "react";

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator
} from "react-native";

import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";
import AppLogo from "../components/AppLogo"
import colors from "../constants/colors";
import Screen from "./Screen";
import Separator from "../components/Separator";
import { Formik } from "formik";

const SignupScreen = ({navigation}) => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:'',
        password:''
    })

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = (values) => {
        console.log("hiii");
    }

    return(
        <Screen color={colors.PRIMARY}>
            <ScrollView style={styles.container}>
                <View style={styles.logoContainer}>
                    <AppLogo font_size={28}/>
                    <Text
                        style={{ fontSize: 15, color:colors.BLACK, marginVertical: 3, fontWeight:"bold"}}
                    >
                        Welcome ....
                    </Text>
                </View>

                <Text style={styles.span}>Please fill in the information</Text>
                <Formik initialValues={values} onSubmit={handleRegister} >
                {({
                    handleChange,
                    handleSubmit,
                    setFieldTouched,
                    touched,
                    errors,
                })=>(
                    <View style={styles.formContainer}>
                        { error && <ErrorMessage>{error}</ErrorMessage>}
                        <InputText
                            iconName={"account"}
                            iconColor={colors.GRAY}
                            placeholder="Full Name"
                            onChangeText={handleChange("name")}
                            onBlur={() => setFieldTouched('name')}
                        />
                        { touched.name && <ErrorMessage>{ errors.name }</ErrorMessage>}
                        <InputText
                            iconName={"phone"}
                            iconColor={colors.GRAY}
                            placeholder="Phone Number"
                            keyboardType='phone-pad'
                            onChangeText={handleChange("phone")}
                            onBlur={() => setFieldTouched('phone')}
                        />
                        { touched.phone && <ErrorMessage>{ errors.phone}</ErrorMessage>}
                        <InputText
                            iconName={"email"}
                            iconColor={colors.GRAY}
                            placeholder="Your Email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            onBlur={() => setFieldTouched('email')}
                        />
                        { touched.email && <ErrorMessage>{ errors.email}</ErrorMessage>}
                        <InputText
                            iconName={"lock"}
                            iconColor={colors.GRAY}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                        />
                        { touched.password && 
                            <ErrorMessage>{ errors.password}</ErrorMessage>
                        }
                        {loading ? (
                            <ActivityIndicator color={colors.PRIMARY} size={"large"}/>
                        ) : (
                            <CustomButton title={"Proceed"} onPress={handleSubmit} />
                        )}

                    </View>
                )}
                </Formik>

                <Separator/>

                <View>
                    <Text style={styles.span}>If you've a PGM account</Text>
                    <CustomButton
                        title={'Sign In'}
                        onPress={() => navigation.navigate("login")}
                    />
                </View>

            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: colors.WHITE,
      height: "100%",
      marginTop: 75,
      paddingLeft:23,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    logoContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
    formContainer: {},
    span: {
      textAlign: "center",
      color: colors.GRAY,
      marginVertical: 5
    },
  });

export default SignupScreen;