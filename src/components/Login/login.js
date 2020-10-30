import React, { Component } from 'react'
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

import { withTranslation } from 'react-i18next';

// import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'
import Themes from '/src/themes'
import Const from '/src/const'
import { LoginManager, AccessToken } from "react-native-fbsdk";
import ButtonBack from '/src/components/UI/buttonBack'
function Login(props) {
    const { t, tReady } = props;

    const navigation = useNavigation()
    const onLogin = () => {
        navigation.navigate(Const.NameScreens.BottomNavigation)
    }

    const onLoginFacebook = () => {
        signUpWithFacebookApi()
    }

    const onLoginNumberPhone = () => {
        navigation.navigate(Const.NameScreens.CodePhone)
    }

    const signUpWithFacebookApi = () => {
        return LoginManager.logInWithPermissions(['public_profile'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(
                    `Login success with permission: ${result.grantedPermissions.toString()}`,
                );
                return AccessToken.getCurrentAccessToken();
            })
            .then((data) => {
                const credential = auth.FacebookAuthProvider.credential(
                    data.accessToken,
                );
                console.log("signUpWithFacebookApi -> credential", credential)
                return auth().signInWithCredential(credential);
            })
            .then((response) =>
                console.log("signUpWithFacebookApi -> response", response)
            )
            .catch(error => {
                console.log("error", error)
            });
    };

    return (
        <ScrollView>
            <ButtonBack />
            <Text style={styles.txtTitle}> {t('Sign In')} </Text>
            <TextInput style={styles.inpEmail} placeholder={'Email'} keyboardType={'email-address'} />
            <TextInput style={styles.inpPassword} placeholder={t('Password')} secureTextEntry={true} />
            <TouchableOpacity style={styles.btnSignInEmail}
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
        backgroundColor: Themes.Colors.PINK,
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
