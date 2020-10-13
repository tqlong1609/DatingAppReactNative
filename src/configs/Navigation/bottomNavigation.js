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

import Const from '/src/const'
import { withTranslation } from 'react-i18next';

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
function MyTabs(props) {
    const { t } = props
    return (
        <PaperProvider theme={theme}>
            <Tab.Navigator
                initialRouteName={Const.NameScreens.Discover}
                activeColor={Themes.Colors.PINK_DARK}
                barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen
                    name={Const.NameScreens.Discover}
                    component={Discover}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Discover),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Prospects}
                    component={Prospects}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Prospects),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Dates}
                    component={Dates}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Dates),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="human-female-female" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Chats}
                    component={Chats}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Chats),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="chat-processing-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Settings}
                    component={Settings}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Settings),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>

    );
}

export default withTranslation()(MyTabs)