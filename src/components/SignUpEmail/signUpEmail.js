import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AvatarCircle from 'src/components/UI/avatarCircle.js'
import Icon from 'react-native-vector-icons/Ionicons';
import { withTranslation } from 'react-i18next';

import Themes from '/src/themes'

//TODO: pick image of avatar
function SignUpEmail(props) {
    const { t, tReady, onSignUpEmail } = props;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onPressSignUp = () => {
        onSignUpEmail({ name, email, password })
    }

    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Create new account')} </Text>
            <TextInput style={styles.inpEnter} placeholder={t('Name')}
                onChangeText={(value) => setName(value)}
            />
            <TextInput style={styles.inpEnter} placeholder={t('Email Address')} keyboardType={'email-address'}
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput style={styles.inpEnter} placeholder={t('Password')} secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.btnSignUpEmail}
                onPress={() => onPressSignUp()}
            >
                <Text style={styles.txtSignUpEmail}>{t('Sign Up')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            <TouchableOpacity style={styles.btnSignUpPhone}>
                <Text style={styles.txtPhone}>{t('Sign up with phone number')}</Text>
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

export default withTranslation()(SignUpEmail)
