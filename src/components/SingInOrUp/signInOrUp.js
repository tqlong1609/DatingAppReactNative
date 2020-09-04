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
                </View>
                <TouchableOpacity
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSignUp}
                >
                    <Text style={styles.txtLogin}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

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
        color: 'red',
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
        backgroundColor: 'red',
        paddingHorizontal: 110,
        paddingVertical: 10
    },
    txtLogin: {
        fontWeight: 'bold',
        fontSize: 15
    },
    btnSignUp: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'red',
        paddingHorizontal: 110,
        paddingVertical: 10
    },
    txtSignUp: {
        fontWeight: 'bold',
        fontSize: 15
    }
})
export default signInOrUp
