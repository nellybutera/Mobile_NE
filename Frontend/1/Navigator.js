import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import ScanScreen from "./screens/ScanScreen";
import MenuOrderedScreen from "./screens/MenuOrderedScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ListRestaurantsScreen from "./screens/ListRestaurantsScreen";
import SuccessScreen from "./screens/SuccessScreen"


const Stack = createStackNavigator();

export default function Navigator (){
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Success">
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={SignupScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Search" component={ScanScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown:false}}/>
                    <Stack.screen name="Success" component={SuccessScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="MenuOrdered" component={MenuOrderedScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Restaurants" component={ListRestaurantsScreen} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}