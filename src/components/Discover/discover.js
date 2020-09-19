import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ImageSwipe from '/src/components/UI/imageSwipe'
import Themes from '/src/themes'
export default function discover() {
    return (
        <View style={styles.container}>
            <View style={styles.containHeader}></View>
            <View style={styles.containSwipe} >
                <ImageSwipe />
            </View>
            <View style={styles.containFooter}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    imgSwipe: {
        paddingHorizontal: Themes.Const.PADDING_IMAGE_SMALL,
        paddingVertical: Themes.Const.PADDING_IMAGE_SMALL,
    },
    container: {
        flex: 1
    },
    containSwipe: {
        flex: 7
    },
    containHeader: {
        flex: 1
    },
    containFooter: {
        flex: 1
    }
})
