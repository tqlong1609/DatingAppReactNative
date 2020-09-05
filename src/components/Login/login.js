import React, { Component } from 'react'
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

export class login extends Component {
    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={styles.btnIcon}>
                    <Icon name="chevron-back-outline" color={PINK} size={30}></Icon>
                </TouchableOpacity>
                <Text style={styles.txtTitle}> Sign In </Text>
                <TextInput style={styles.inpEmail} placeholder={'Email'} keyboardType={'email-address'} />
                <TextInput style={styles.inpPassword} placeholder={'Password'} secureTextEntry={true} />
                <TouchableOpacity style={styles.btnSignInEmail}>
                    <Text style={styles.txtLoginEmail}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.txtOr}> OR </Text>
                <TouchableOpacity style={styles.btnSignInFB}>
                    <Text style={styles.txtLoginFB}>Login With Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignInPhone}>
                    <Text style={styles.txtPhone}>Login with phone number</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const PINK = '#EB5A6D';
const FACEBOOK = '#4267B2';
const BLUE_BRIGHT = '#469DFF';
const BORDER_RADIUS = 30;
const MARGIN_HORIZONTAL = 50;
const HEIGHT = 40;
const MARGIN_V1 = 40;
const FONT_SIZE = 15;

const inpSignIn = {
    borderWidth: 1,
    marginHorizontal: MARGIN_HORIZONTAL,
    height: HEIGHT,
    paddingLeft: 17,
    borderRadius: BORDER_RADIUS,
}

const btnSignIn = {
    marginHorizontal: MARGIN_HORIZONTAL,
    height: HEIGHT,
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
}

const styles = StyleSheet.create({
    btnIcon: {
        width: 30,
        margin: 5
    },
    txtTitle: {
        color: PINK,
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20
    },
    inpEmail: {
        ...inpSignIn,
        marginTop: MARGIN_V1
    },
    inpPassword: {
        ...inpSignIn,
        marginTop: 25,
        marginBottom: MARGIN_V1
    },
    btnSignInEmail: {
        ...btnSignIn,
        backgroundColor: PINK,
    },
    txtLoginEmail: {
        alignSelf: 'center',
        color: 'white',
        fontSize: FONT_SIZE
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: MARGIN_V1,
        marginBottom: MARGIN_V1
    },
    btnSignInFB: {
        ...btnSignIn,
        backgroundColor: FACEBOOK,
    },
    txtLoginFB: {
        color: 'white',
        alignSelf: 'center',
        fontSize: FONT_SIZE
    },
    btnSignInPhone: {
        width: 200,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    txtPhone: {
        alignSelf: 'center',
        color: BLUE_BRIGHT,
        fontSize: FONT_SIZE,
        fontWeight: 'bold'
    }

})

export default login
