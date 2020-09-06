import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AvatarCircle from 'src/components/UI/avatarCircle.js'
import Icon from 'react-native-vector-icons/Ionicons';

import Themes from '/src/themes'

//TODO: pick image of avatar
export default function signUpEmail() {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Create new account </Text>
            <AvatarCircle style={styles.avatar} />
            <TextInput style={styles.inpEnter} placeholder={'First Name'} />
            <TextInput style={styles.inpEnter} placeholder={'Last Name'} />
            <TextInput style={styles.inpEnter} placeholder={'Email Address'} keyboardType={'email-address'} />
            <TextInput style={styles.inpEnter} placeholder={'Password'} secureTextEntry={true} />
            <TouchableOpacity style={styles.btnSignUpEmail}>
                <Text style={styles.txtSignUpEmail}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignUpPhone}>
                <Text style={styles.txtPhone}>Sign up with phone number</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    avatar: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    inpEnter: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSignUpEmail: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    txtSignUpEmail: {
        ...Themes.Styles.TextButton,
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSignUpPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    }
})
