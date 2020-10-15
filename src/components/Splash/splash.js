import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AnimLottieView from '/src/components/UI/animLottieView'
import Const from '/src/const'
import Themes from '/src/themes'
import { readStorage, saveStorage, clearStorage } from '/src/configs/AsyncStorage'
import { changeLanguage } from '/src/translations'

export default function Splash(props) {
    const navigation = useNavigation()
    useEffect(() => {
        const run = async () => {
            const data = await readStorage(Const.StorageKey.CODE_LANGUAGES)
            console.log("run -> data", data)
            if (data !== null && data !== undefined) {
                changeLanguage(data)
                navigation.navigate(Const.NameScreens.Introduction)
            } else {
                saveStorage(Const.StorageKey.CODE_LANGUAGES, 'en')
                navigation.navigate(Const.NameScreens.Introduction)
            }
        }
        setTimeout(
            () => run(), 2000
        )
    }, [])

    return (
        <View style={styles.container}>
            <AnimLottieView source={require('../../assets/lotties/16555-firery-passion.json')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', backgroundColor: Themes.Colors.PINK_BRIGHT
    }
})
