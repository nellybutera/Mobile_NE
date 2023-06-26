import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

function AppLogo({font_size, first_color= colors.BLACK }){
    return(
        <View style={styles.container}>
            <Text 
                style={[styles.first, {fontSize:font_size, color: first_color}]}
            >
                Supa
            </Text>
            <Text
                style={[styles.last, {fontSize: font_size}]}
            >
                Menu
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    first: {
        fontWeight: 'bold'
    },
    last: {
        color: colors.PRIMARY,
        fontWeight: 'bold'
    }
})

export default AppLogo;