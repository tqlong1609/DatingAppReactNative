import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '/src/components/Introduction/introduction';
import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'
import Login from '/src/components/Login/login'
import CodePhone from '/src/components/CodePhone/codePhone.controller'
import MyProfile from '/src/components/MyProfile/myProfile'
import BottomNavigation from './bottomNavigation'
import SignUpPhone from '/src/components/SignUpPhone/signUpPhone'
import Religious from '/src/components/Religious/religious'
import MultiLanguages from '/src/components/MultiLanguages/multiLanguages.controller'
import Splash from '/src/components/Splash/splash'

import Const from '/src/const'

const Stack = createStackNavigator();

// locale language
import { setI18nConfig, translate } from '/src/translations';
import '/src/translations/i18n';
import * as RNLocalize from 'react-native-localize';
const useForceUpdate = () => useState()[1];

export default function screensNavigation() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        setI18nConfig()
    }, [])

    useEffect(() => {
        RNLocalize.addEventListener('change', () => handleLocalizationChange());
        return () => {
            RNLocalize.removeEventListener(
                'change',
                () => handleLocalizationChange(),
            );
        }
    })

    const handleLocalizationChange = () => {
        setI18nConfig();
        forceUpdate();
    };


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={Const.NameScreens.Splash}
                    component={Splash}
                />
                <Stack.Screen
                    name={Const.NameScreens.Introduction}
                    component={Introduction}
                />
                <Stack.Screen
                    name={"BottomNavigation"}
                    component={BottomNavigation}
                />
                <Stack.Screen
                    name={Const.NameScreens.Religious}
                    component={Religious}
                />
                <Stack.Screen
                    name={Const.NameScreens.SignUpPhone}
                    component={SignUpPhone}
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
                <Stack.Screen
                    name={Const.NameScreens.MultiLanguages}
                    component={MultiLanguages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
