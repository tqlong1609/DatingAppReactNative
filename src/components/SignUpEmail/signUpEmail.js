import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AvatarCircle from 'src/components/UI/avatarCircle.js'

import Icon from 'react-native-vector-icons/Ionicons';

import Themes from '/src/themes'

export default function signUpEmail() {
    return (
        <View>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Create new account </Text>
            <AvatarCircle url={require('/src/assets/images/Tinder-Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        width: 30,
        margin: 5
    },
    txtTitle: {
        color: Themes.Colors.PINK,
        fontWeight: 'bold',
        fontSize: Themes.Const.FONT_SIZE_V1,
        marginTop: 20,
        marginLeft: 20
    },
})
