import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../constants/colors"

function SocialMediaButton({ name, color, text, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            { name && <MaterialCommunityIcons name={name} color={color} size={20}/>}
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.WHITE,
        padding: 10,
        paddingLeft:15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.LIGHTGRAY,
        height: 45,
        width: '95%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 4,
    },
    text: {
        alignSelf: 'center',
        marginLeft: '25%',
        color: colors.GRAY,
        fontWeight:"bold"
    },
});

export default SocialMediaButton;

