import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from '../constants/themes';

const SuccessScreen = ({}) => {
    return (
        <View></View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#000000'
    },

    successText: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
});

export default SuccessScreen;