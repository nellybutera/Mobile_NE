import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import SearchBar from "../components/SearchBar";

const ScanScreen = ({navigation}) => {
    const handleSearch= (searchText) => {
        console.log('performing search for: ',searchText);
        navigation.navigate('Restaurants');
    }
    return(
        <View style={styles.container}>
            <View  style={styles.searchBar}>
                <SearchBar onSearch={handleSearch}/>
            </View>
            <Image source={require('../assets/scan.png')} style={styles.scanLogo}/>
            <Text style={styles.scanText}>Scan, Pay & Enjoy!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7941D',
        height: '100%'
    },
    searchBar:{
        marginTop: '30%',
        marginVertical: '15%',
        marginLeft: '10%',
        width:'80%'
    },
    orText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60
    },
    scanText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 80
    },
    scanLogo: {
        marginLeft: 130,
        marginTop: 50
    }
});

export default ScanScreen;