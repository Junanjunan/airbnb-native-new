import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import BackBtn from "../components/Auth/BackBtn";


const Auth = createStackNavigator();



export default () => (
    <Auth.Navigator
    
    screenOptions={{
        headerMode: "float",
        headerBackTitleVisible: false,
        headerTransparent: true,
        presentation: 'modal',
        headerTitleStyle:{
            color: 'white',
        },
        headerBackImage: () => <BackBtn />
    }}
    >
        <Auth.Screen name="Welcome" component={Welcome} />
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
    );