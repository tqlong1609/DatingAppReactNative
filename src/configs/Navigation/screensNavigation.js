import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '/src/components/Introduction/introduction';
import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'
import Login from '/src/components/Login/login'
import CodePhone from '/src/components/CodePhone/codePhone.controller'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
