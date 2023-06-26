import React from 'react';
import { StatusBar, Platform, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../constants/colors';

function Screen({ children, color= colors.WHITE }) {
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
})

export default Screen;