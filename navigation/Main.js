import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import colors from "../colors";
import utils from "../utils";
import Room from "../screens/Main/Room";
import BackBtn from "../components/Auth/BackBtn";


// const Main = createBottomTabNavigator();
const TabsNavigator = createBottomTabNavigator();

// export default () => <Main.Navigator
//     // screenOptions={{
//     //     tabBarActiveTintColor: colors.red
//     // }}
//     screenOptions = {({route}) => ({
//         tabBarIcon: ({focused}) =>{
            
//         }
//     })}
// >
//         <Main.Screen name="Explore" component={Explore}></Main.Screen>
//         <Main.Screen name="Saved" component={Saved}></Main.Screen>
//         <Main.Screen name="Map" component={MapScreen}></Main.Screen>
//         <Main.Screen name="Profile" component={Profile}></Main.Screen>
//     </Main.Navigator>

const Tabs = () =>{
    return(
        <TabsNavigator.Navigator
            screenOptions={({route}) => ({
                tabBarActiveTintColor: colors.red,
                tabBarIcon: ({focused}) =>{
                    const isAndroid = utils.isAndroid();
                    var iconName;
                    if(route.name === "Explore"){
                        iconName = "search";
                    } else if(route.name === "Saved"){
                        iconName = "heart";
                    } else if(route.name === "Map"){
                        iconName = "map";
                    } else if(route.name === "Profile"){
                        iconName = "person";
                    }
                return <Ionicons name={iconName} size={20} color={focused ? colors.red: "gray"} />
                }
            })}
        >
            <TabsNavigator.Screen name="Explore" component={Explore}/>
            <TabsNavigator.Screen name="Saved" component={Saved}/>
            <TabsNavigator.Screen name="Map" component={MapScreen}/>
            <TabsNavigator.Screen name="Profile" component={Profile}/>
        </TabsNavigator.Navigator>
    )
};

const MainNavigator = createStackNavigator();

export default () => {
    return(
        <MainNavigator.Navigator
            screenOptions={{
                headerTintColor: "rgba(50, 50, 50, 0.5)",
                headerBackTitleVisible: false,
                headerBackImage: () => <BackBtn />
            }}
        >
            <MainNavigator.Screen name="tabs" component={Tabs} options={{headerShown: false}} />
            <MainNavigator.Screen 
                name="RoomDetail" 
                component={Room}
                options={{
                    headerTransparent: true,
                    headerBackground: () =>(
                        <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />
                    )
                }}
            />
        </MainNavigator.Navigator>
    );
}