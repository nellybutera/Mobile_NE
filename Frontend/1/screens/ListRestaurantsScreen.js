import React from "react";
import { TouchableOpacity} from "react-native";
import { StyleSheet, View, Text, FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestaurantItem from "../components/RestaurantItem";
import colors from "../constants/colors"
import Separator from '../components/Separator';

const ListRestaurantsScreen = ({ navigation }) => {
    
    const restaurantData = [
        {
            id: 1,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food1.jpeg'),
        },
        {
            id: 2,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/resto.jpg'),
        },
        {
            id: 3,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food2.jpeg'),
        },
        {
            id: 4,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food1.jpeg'),
        },
        {
            id: 5,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/resto.jpg'),
        },
        {
            id: 6,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food1.jpeg'),
        },
        {
            id: 7,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food2.jpeg'),
        },
        {
            id: 8,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food1.jpeg'),
        },
        {
            id: 9,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/food2.jpeg'),
        },
        {
            id: 10,
            title: 'Choose Kigali',
            description: "World, African, Pizzeria, Coffee",
            image: require('../assets/resto.jpg'),
        },
    ];

    const handleGoBack = () => {
        navigation.goBack();
    };
    return(
        <View style={styles.container}>
            <View style={styles.topNav}>
                <View style={styles.topNavItem}>
                    <TouchableOpacity onPress={handleGoBack} style={{color:colors.PRIMARY}}>
                        <Ionicons name="chevron-back-outline" style={{color:colors.PRIMARY}} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.topNavItem}>
                    <Text>Search...</Text>
                </View>
            </View>

            <View style={styles.separator}></View>

            <Text style={{marginTop: 20, padding:5, marginLeft: '6%', color:'#F7941D', fontSize: 13}}>Nearby Restaurant</Text>

            {/* <ScrollView style={styles.scrollview}> */}
                <View style={styles.scrollview}>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={restaurantData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <RestaurantItem restaurant={item} navigation={navigation}/> }
                    />
                </View>
            {/* </ScrollView> */}

            {/* Navigation bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="notifications" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="cart" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="settings" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="alarm" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
        backgroundColor:'#fff'
    },
    separator:{
        marginVertical: 5,
        height: 1,
        width: '100%',
        backgroundColor: colors.LIGHTGRAY
    },
    topNav: {
        backgroundColor: '#fff',
        height: '13%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    topNavItem:{
        marginTop: '5%',
        marginLeft: '5%',
    },
    scrollview: {
        flex: 1,
        padding: 16,
        height: '75%',
        backgroundColor:'#fff'
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
        paddingVertical: 35,
        height: '15%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: 'gray',
        shadowOffset: {
            width: 1.0,
            height: 1.0
        },
        shadowOpacity: 1.0,
        shadowRadius: 25.0,
        elevation: 10
    },
    content: {
        padding: 20,
    }
})

export default ListRestaurantsScreen;