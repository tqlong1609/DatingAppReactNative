import React from 'react'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function animLottieView(props) {
    const { style, source } = props;
    return (
        <LottieView
            style={{ ...styles.container, ...style }}
            source={source}
            autoPlay
            loop
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    }

})
