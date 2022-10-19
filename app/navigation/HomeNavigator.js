import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductsScreen from "../screens/ProductsScreen";

const HomenNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Landing" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Products" component={ProductsScreen}/>
    </Stack.Navigator>
)


export default HomenNavigator;