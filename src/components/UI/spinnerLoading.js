import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import AnimLottieView from '/src/components/UI/animLottieView'
import Themes from '/src/themes'

export default function spinnerLoading(props) {
    const { isLoading } = props
    return (
        <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={Themes.Styles.spinnerTextStyle}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AnimLottieView
                    source={require('/src/assets/lotties/9844-loading-40-paperplane.json')} />
            </View>
        </Spinner>
    )
}

const styles = StyleSheet.create({})
