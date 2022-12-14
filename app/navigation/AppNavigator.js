import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import BottomNavigator from "./BottomNavigator";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import NotificationDetails from "../screens/NotificationDetails";
import ProductDetails from "../screens/ProductDetailsScreen";
import ScanCodeScreen from "../screens/ScanCodeScreen";
import TopUpScreen from "../screens/TopUpScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="HomePage" component={BottomNavigator}/>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen}/>
        <Stack.Screen name="TopUp" component={TopUpScreen}/>
        <Stack.Screen name="ScanCode" component={ScanCodeScreen}/>
        <Stack.Screen name="NotificationDetails" component={NotificationDetails}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
    </Stack.Navigator>
)

export default AppNavigator;