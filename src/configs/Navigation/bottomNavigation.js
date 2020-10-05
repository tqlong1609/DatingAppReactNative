import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Themes from '/src/themes'
import Discover from '/src/components/Discover/discover'
import Prospects from '/src/components/Prospects/prospects'
import Dates from '/src/components/Dates/dates'
import Chats from '/src/components/Chats/chats'
import Settings from '/src/components/Settings/settings'

const Tab = createMaterialBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'yellow',
        // accent: 'green',
    },
}
export default function MyTabs() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Tab.Navigator
                    initialRouteName="Discover"
                    activeColor={Themes.Colors.PINK_DARK}
                    barStyle={{ backgroundColor: 'white' }}
                >
                    <Tab.Screen
                        name="Discover"
                        component={Discover}
                        options={{
                            tabBarLabel: 'Discover',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="magnify" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Prospects"
                        component={Prospects}
                        options={{
                            tabBarLabel: 'Prospects',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Dates"
                        component={Dates}
                        options={{
                            tabBarLabel: 'Dates',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="human-female-female" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Chats"
                        component={Chats}
                        options={{
                            tabBarLabel: 'Chats',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="chat-processing-outline" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>

    );
}

