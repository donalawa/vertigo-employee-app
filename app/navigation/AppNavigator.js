import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import BottomNavigator from "./BottomNavigator";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createNativeStackNavigator();


const AppNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="HomePage" component={BottomNavigator}/>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen}/>
    </Stack.Navigator>
)

export default AppNavigator;