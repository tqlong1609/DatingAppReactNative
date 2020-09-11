import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputPhone from '/src/components/UI/textInputPhone'
export default function codePhone(props) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Sign In </Text>
            <TextInputPhone style={styles.txtPhoneCode} />
            <TouchableOpacity style={styles.btnSignInEmail}>
                <Text style={styles.txtLoginEmail}>Send code</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignInFB}>
                <Text style={styles.txtLoginFB}>Login With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInPhone}>
                <Text style={styles.txtPhone}>Login with E-mail</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtPhoneCode: {
        marginTop: Themes.Const.MARGIN_TOP_V2,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    btnSignInEmail: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,

    },
    txtLoginEmail: {
        ...Themes.Styles.TextButton
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1
    },
    btnSignInFB: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.FACEBOOK,
    },
    txtLoginFB: {
        ...Themes.Styles.TextButton
    },
    btnSignInPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    }
})
