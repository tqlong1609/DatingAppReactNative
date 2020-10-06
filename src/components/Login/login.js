import React, { Component } from 'react'
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

// import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import Themes from '/src/themes'
import Const from '/src/const'
import { LoginManager, AccessToken } from "react-native-fbsdk";

export function login(props) {
    const navigation = useNavigation()
    const onLogin = () => {
    }

    const onLoginFacebook = () => {

    }

    // signUpWithFacebookApi = () => {
    //     return LoginManager.logInWithPermissions(['public_profile'])
    //       .then((result) => {
    //         if (result.isCancelled) {
    //           return Promise.reject(new Error('The user cancelled the request'));
    //         }
    //         console.log(
    //           `Login success with permission: ${result.grantedPermissions.toString()}`,
    //         );
    //         return AccessToken.getCurrentAccessToken();
    //       })
    //       .then((data) => {
    //         const credential = firebase.auth.FacebookAuthProvider.credential(
    //           data.accessToken,
    //         );
    //         return firebase.auth().signInWithCredential(credential);
    //       })
    //       .then((response) => response);
    //   };

    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Sign In </Text>
            <TextInput style={styles.inpEmail} placeholder={'Email'} keyboardType={'email-address'} />
            <TextInput style={styles.inpPassword} placeholder={'Password'} secureTextEntry={true} />
            <TouchableOpacity style={styles.btnSignInEmail}
                onPress={() => onLogin()}
            >
                <Text style={styles.txtLoginEmail}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignInFB}
                onPress={() => onLoginFacebook()}
            >
                <Text style={styles.txtLoginFB}>Login With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInPhone}>
                <Text style={styles.txtPhone}>Login with phone number</Text>
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
    inpEmail: {
        ...Themes.Styles.TextInput,
        marginTop: 80
    },
    inpPassword: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        marginBottom: 80
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

export default login
