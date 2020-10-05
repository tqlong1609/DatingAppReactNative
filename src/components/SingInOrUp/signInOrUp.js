import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Themes from '/src/themes'

import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
export function signInOrUp(props) {
    const navigation = useNavigation()
    const onLogin = () => {
        navigation.navigate(Const.NameScreens.Login)
    }
    return (
        <ScrollView>
            <Image
                style={styles.imgLogo}
                source={require('src/assets/images/Tinder-Logo.png')}
            />
            <View style={styles.boxText}>
                <Text
                    style={styles.txtTitle}
                >Find your soul mate</Text>
                <Text
                    style={styles.txtIntro}
                >Match and chat with people you like from your area</Text>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => onLogin()}
                >
                    <Text style={styles.txtLogin}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSignUp}
                >
                    <Text style={styles.txtSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const PADDING_VERTICAL = 10;

const styles = StyleSheet.create({
    imgLogo: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: 150
    },
    boxText: {
        width: 265,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    txtTitle: {
        color: Themes.Colors.PINK,
        fontSize: 29,
        fontWeight: 'bold'
    },
    txtIntro: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    btnLogin: {
        alignSelf: 'center',
        backgroundColor: Themes.Colors.PINK,
        width: '100%',
        marginTop: 30,
        borderRadius: Themes.Const.BORDER_RADIUS
    },
    txtLogin: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        color: 'white',
        paddingVertical: PADDING_VERTICAL
    },
    btnSignUp: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 20,
        borderRadius: Themes.Const.BORDER_RADIUS,
        borderColor: Themes.Colors.PINK,
        borderWidth: 1
    },
    txtSignUp: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        paddingVertical: PADDING_VERTICAL,
        color: Themes.Colors.PINK
    }
})
export default signInOrUp
