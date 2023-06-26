import React, { useState } from "react";
import Screen from "./Screen";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Formik } from "formik";

import AppLogo from "../components/AppLogo";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";
import Separator from "../components/Separator";
import SocialMediaButton from "../components/SocialMediaButton";
import colors from "../constants/colors";

function LoginScreen({}){

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null)

    const handleLogin = (values) => {
        console.log('hiii');
    }
    return(
        <Screen color={colors.PRIMARY}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <AppLogo font_size={28}/>
                    <Text
                        style={{ fontSize: 17, color: colors.DARKGRAY}}
                    >
                        Welcome ....
                    </Text>
                </View>

                <Text style={styles.span}>Sign in to continue</Text>
                <Formik initialValues={values} onSubmit={handleLogin}>
                {({
                    handleChange,
                    handleSubmit,
                    setFieldTouched,
                    touched,
                    errors,
                })=>(
                    <View style={styles.formContainer}>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <InputText
                            iconName={"email"}
                            iconColor={colors.GRAY}
                            placeholder="Your Email"
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText ={handleChange("email")}
                        />
                        { touched.email && <ErrorMessage>{ errors.email}</ErrorMessage>}
                        <InputText
                            iconName={'lock'}
                            iconColor={colors.GRAY}
                            placeholder="Password"
                            secureTextEntry
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange('password')}
                        />
                        { touched.password && <ErrorMessage>{ errors.password }</ErrorMessage>}
                        { loading ? <ActivityIndicator color={colors.PRIMARY} size={'large'}/> : <CustomButton title={"Sign in"} onPress={handleSubmit}/> }
                    </View>
                )}
                </Formik>

                {/* <Separator/> */}
                <Text style={styles.or}>OR</Text>
                <View>
                    <SocialMediaButton
                        color={colors.PRIMARY}
                        name={"google"}
                        text={"Login with google"}
                        onPress={() => console.log("google")}
                    />
                    <SocialMediaButton
                        color={colors.DODGERBLUE}
                        name={"facebook"}
                        text={"Login with facebook"}
                        onPress={() => console.log("facebook")}
                    />
                </View>

                {/* <View>
                    <Text style={styles.span}>Don't have an account?</Text>
                    <CustomButton
                        title={"Register"}
                        onPress={() => navigation.navigate("register")}
                    />
                </View> */}
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <Text style={styles.register}>
                    Don't have an account? <Text style={styles.spanText} onPress = {() => navigation.navigate('Signup')}>Register</Text>
                    {/* Don'have account? <LinkText text='Register' onPress={() => navigation.navigate('Signup')}/> */}
                </Text>
            </View>
        </Screen>
    );
};

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
        paddingVertical: 5,
    },
    span: {
        textAlign: "center",
        color: colors.GRAY,
        marginVertical: 5
    },
    spanText:{
        color:'#F7941D'
    },
    or:{
        fontWeight: 'bold',
        color:colors.GRAY,
        marginLeft: 140,
        marginBottom: 10,
        marginTop: 10,
    },
    formContainer: {},
        span: {
        textAlign: "center",
        color: colors.GRAY,
        marginVertical: 5
    },

    forgotPassword: {
        fontSize: 13,
        fontWeight:'bold',
        color:'#F7941D',
        marginLeft: '33%',
        marginTop: '5%',
    },
    register:{
        fontSize: 13,
        color: colors.GRAY,
        marginLeft: '21%',
        marginTop: 15,
        marginBottom: 10,
    },
});


export default LoginScreen;