import React from "react";
import { View, TextInput, StyleSheet} from "react-native";
import colors from "../constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputText= ({iconName, iconColor, onChangeText, width = '95%', ...otherProps}) =>{
    return (
        <View style={[styles.container,{ width: width}]}>
             { iconName && <MaterialCommunityIcons name={iconName} color={iconColor} size={20}/>}
            <TextInput onChangeText={onChangeText} {...otherProps} style={styles.input}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: colors.LIGHTGRAY,
        marginVertical: 2,
        padding: 10,
        paddingLeft: 10,
    },
    input: {
        paddingLeft: 15,
    }
});

export default InputText;