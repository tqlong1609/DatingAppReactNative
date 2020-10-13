import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AnimLottieView from '/src/components/UI/animLottieView'
import Const from '/src/const'
import Themes from '/src/themes'
export default function Splash(props) {
    const navigation = useNavigation()
    // const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        return new Promise((resolve) =>
            setTimeout(() => resolve("hellow"), 2000))
    }

    useEffect(() => {
        const run = async () => {
            const data = await getData()
            if (data !== null) {
                navigation.navigate(Const.NameScreens.Introduction)
            }
        }
        run()
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
