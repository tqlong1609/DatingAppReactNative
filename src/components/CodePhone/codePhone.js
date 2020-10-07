import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputPhone from '/src/components/UI/textInputPhone'
import PropTypes from 'prop-types';

export default function codePhone(props) {

    const { onSendCodePhone } = props

    const [phoneNumber, setPhoneNumber] = useState('')

    const onChangeText = (value) => {
        setPhoneNumber(value)
    }

    const onSendCode = () => {
        onSendCodePhone && onSendCodePhone(phoneNumber)
    }

    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Sign In </Text>
            <TextInputPhone style={styles.txtPhoneCode} onChangeText={onChangeText} />
            <TouchableOpacity style={styles.btnSendCode}
                onPress={() => onSendCode()}
            >
                <Text style={styles.txtSendCode}>Send code</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignInFB}>
                <Text style={styles.txtLoginFB}>Login With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInEmail}>
                <Text style={styles.txtSignInEmail}>Login with E-mail</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

codePhone.propTypes = {
    onSendCodePhone: PropTypes.func,
}

codePhone.defaultProps = {
    onSendCodePhone: null
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
    btnSendCode: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,

    },
    txtSendCode: {
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
    btnSignInEmail: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtSignInEmail: {
        ...Themes.Styles.TextButtonBottom
    }
})
