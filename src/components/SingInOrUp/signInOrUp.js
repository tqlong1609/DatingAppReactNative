import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'


export class signInOrUp extends Component {
    render() {

        return (
            <View>
                <Image
                    style={styles.imgLogo}
                    source={require('src/assets/images/Tinder-Logo.png')}
                />
                <View style={styles.boxText}>
                    <Text
                        style={styles.txtTitle}
                    >Find your soul mate</Text>
                    <Text
                        style={styles.txtIntro}
                    >Match and chat with people you like from your area</Text>
                    <TouchableOpacity
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLogin}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnSignUp}
                    >
                        <Text style={styles.txtSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const PADDING_VERTICAL = 10;
const BORDER_RADIUS = 30;
const PINK = '#EB5A6D';

const styles = StyleSheet.create({
    imgLogo: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: 150
    },
    boxText: {
        width: 265,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    txtTitle: {
        color: PINK,
        fontSize: 30
    },
    txtIntro: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    btnLogin: {
        alignSelf: 'center',
        backgroundColor: PINK,
        width: '100%',
        marginTop: 30,
        borderRadius: BORDER_RADIUS
    },
    txtLogin: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        color: 'white',
        paddingVertical: PADDING_VERTICAL
    },
    btnSignUp: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 20,
        borderRadius: BORDER_RADIUS,
        borderColor: PINK,
        borderWidth: 1
    },
    txtSignUp: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        paddingVertical: PADDING_VERTICAL,
        color: PINK
    }
})
export default signInOrUp
