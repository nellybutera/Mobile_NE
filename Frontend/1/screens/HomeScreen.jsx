import React, {useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';



const HomeScreen  = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text  style={styles.mainText}>
                Supa<Text style={styles.spanText}>Menu</Text>
            </Text> 
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7941D'
    },
    mainText:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily:"Roboto"
    },
    spanText: {
        color: 'white',
    },
})

export default HomeScreen;