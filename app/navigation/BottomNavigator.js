import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomenNavigator from "./HomeNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import NewOrderButton from "./NewOrderButton";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();


const BottomNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: {fontSize: 18, marginBottom: 5}, tabBarStyle: {backgroundColor: colors.secondary, height: 70} }}>
        <Tab.Screen 
        name="Home"
        component={HomenNavigator}
        options={{
            tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="home" color={color} size={32}/>
        }}
        
        />
        <Tab.Screen 
        name="NewOrder"
        component={HomenNavigator}
        options={({ navigation }) => ({
            tabBarButton: () => <NewOrderButton onPress={() => navigation.navigate("Home")}/>,
            tabBarIcon: ({ size, color}) => <MaterialCommunityIcons name="plus" size={size} color={color}/>
        })}
        />
        
        <Tab.Screen 
        name="Notification"
        component={NotificationScreen}
        options={{
            tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="bell" color={color} size={27}/>
        }}
        />
    </Tab.Navigator>
)

export default BottomNavigator;