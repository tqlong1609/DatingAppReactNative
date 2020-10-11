import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '/src/components/Introduction/introduction';
import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'
import Login from '/src/components/Login/login'
import CodePhone from '/src/components/CodePhone/codePhone.controller'
import MyProfile from '/src/components/MyProfile/myProfile'
import BottomNavigation from './bottomNavigation'

import Const from '/src/const'

const Stack = createStackNavigator();

export default function screensNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={"BottomNavigation"}
                    component={BottomNavigation}
                />
                <Stack.Screen
                    name={Const.NameScreens.Introduction}
                    component={Introduction}
                />
                <Stack.Screen
                    name={Const.NameScreens.SingInOrUp}
                    component={SingInOrUp}
                />
                <Stack.Screen
                    name={Const.NameScreens.Login}
                    component={Login}
                />
                <Stack.Screen
                    name={Const.NameScreens.CodePhone}
                    component={CodePhone}
                />
                <Stack.Screen
                    name={Const.NameScreens.MyProfile}
                    component={MyProfile}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
