import React, { useRef, useState } from 'react'
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

import { withTranslation } from 'react-i18next';
import Themes from '/src/themes'
import ButtonBack from '/src/components/UI/buttonBack'
import Const from '/src/const'
import SpinnerLoading from '/src/components/UI/spinnerLoading'
import AlertModal from '/src/components/Model/alertModal'

function Login(props) {
    const { t, onPressLogin, onPressLoginNumberPhone, onPressLoginFacebookAPI,
        isLoading, isShowModalFail, message, onPressButtonModal, onBack } = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const refPassword = useRef()

    let isVisible = true

    const onLogin = () => {
        onPressLogin && onPressLogin(email, password)
    }

    const onLoginFacebook = () => {
        onPressLoginFacebookAPI && onPressLoginFacebookAPI()
    }

    const onLoginNumberPhone = () => {
        onPressLoginNumberPhone && onPressLoginNumberPhone()
    }

    const onSubmitEmail = () => {
        refPassword.current.focus()
    }

    if (email !== "" && password !== "") {
        isVisible = false
    }

    return (
        <ScrollView>
            <SpinnerLoading isLoading={isLoading} />
            <ButtonBack
                onPress={() => onBack && onBack()}
            />
            <Text style={styles.txtTitle}> {t('Sign In')} </Text>
            <TextInput style={styles.inpEmail}
                onSubmitEditing={() => onSubmitEmail()}
                placeholder={'Email'}
                onChangeText={(email) => setEmail(email)}
                keyboardType={'email-address'} />
            <TextInput
                style={styles.inpPassword}
                onChangeText={(password) => setPassword(password)}
                placeholder={t('Password')}
                onSubmitEditing={() => onLogin()}
                maxLength={Const.Common.MAX_LEN_PASSWORD}
                secureTextEntry={true}
                ref={refPassword}
            />
            <TouchableOpacity
                disabled={isVisible}
                style={[styles.btnSignInEmail, !isVisible ? { backgroundColor: Themes.Colors.PINK } : { backgroundColor: 'gray' }]}
                onPress={() => onLogin()}
            >
                <Text style={styles.txtLoginEmail}>{t('Log In')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            <TouchableOpacity style={styles.btnSignInFB}
                onPress={() => onLoginFacebook()}
            >
                <Text style={styles.txtLoginFB}>{t('Login With Facebook')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInPhone}
                onPress={() => onLoginNumberPhone()}
            >
                <Text style={styles.txtPhone}>{t('Login with phone number')}</Text>
            </TouchableOpacity>
            <AlertModal
                visible={isShowModalFail}
                urlImage={require('/src/assets/images/warning.png')}
                title={"Error"}
                detail={message}
                textButton={"Try Again"}
                colorButton={"#FF0000"}
                onPressButton={onPressButtonModal}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    txtTitle: {
        ...Themes.Styles.Title
    },
    inpEmail: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP_V3
    },
    inpPassword: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        marginBottom: Themes.Const.MARGIN_TOP_V3
    },
    btnSignInEmail: {
        ...Themes.Styles.Button,

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

export default withTranslation()(Login)
