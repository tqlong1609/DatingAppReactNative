import React from 'react'
import {
    StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Themes from '/src/themes'
import ConfirmInputPhone from '/src/components/UI/confirmInputPhone'
export default function confirmCodePhone() {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Sign In </Text>
            <ConfirmInputPhone style={styles.inpPhone} />
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
    inpPhone: {
        // ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_V1 + 60,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
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
