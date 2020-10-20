import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';
export default function buttonSend(props) {
    const { style } = props
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 3, y: 0 }}
            colors={['pink', 'orange']}
            style={{ ...styles.linearContain, ...style }}>
            <TouchableOpacity style={styles.btnSend}>
                <Ionicons name="paper-plane" size={25} color={"white"}></Ionicons>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearContain: {
        width: 37, height: 37, borderRadius: 37 / 2
    },
    btnSend: {
        width: 37, height: 37, borderRadius: 37 / 2,
        alignItems: 'center', paddingTop: 6
    }
})
