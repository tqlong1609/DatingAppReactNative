import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Themes from '/src/themes';

export default function buttonAddImage() {
    return (
        <LinearGradient
            onTouchStart={() => console.log('ok')}
            start={{ x: 0, y: 1 }}
            end={{ x: 2, y: 0 }}
            colors={[Themes.Colors.PINK_DARK, 'orange']}
            style={{
                position: 'absolute', width: 50, height: 50,
                bottom: 10, alignSelf: 'center', borderRadius: 50 / 2,
                justifyContent: 'center', alignItems: 'center'
            }}>
            <Ionicons name="camera" size={30} color={"white"}></Ionicons>
            <View style={{
                width: 15, height: 15, position: 'absolute', backgroundColor: 'white', bottom: 0,
                right: 0, borderRadius: 15 / 2, justifyContent: 'center', alignItems: 'center'
            }}>
                <Ionicons name="add" color={Themes.Colors.PINK_DARK} size={15}></Ionicons>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({})
