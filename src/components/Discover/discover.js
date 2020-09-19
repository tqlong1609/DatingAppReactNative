import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ImageSwipe from '/src/components/UI/imageSwipe'
import Themes from '/src/themes'
import ButtonStatus from '/src/components/UI/buttonStatus'
import SwitchGrid from '/src/components/UI/switchGrid'
export default function discover() {
    const onPressBack = () => {
        console.log('object')
    }
    return (
        <View style={styles.container}>
            <View style={styles.containHeader}>
                <SwitchGrid />
            </View>
            <View style={styles.containSwipe} >
                <ImageSwipe />
            </View>
            <View style={styles.containFooter}>
                <ButtonStatus
                    onPress={() => onPressBack()}
                    color={"#FECB31"} size={25} nameFontAwesome5={"undo-alt"} />
                <ButtonStatus
                    onPress={() => onPressBack()}
                    style={styles.icoBigger}
                    color={"#C34784"} size={55} nameIonicons={"close"} />
                <ButtonStatus
                    onPress={() => onPressBack()}
                    color={"#A024C2"} size={30} nameIonicons={"flash"} />
                <ButtonStatus style={styles.icoBigger}
                    onPress={() => onPressBack()}
                    color={"#01B588"} size={45} nameIonicons={"heart"} />
                <ButtonStatus
                    color={"#00B1BA"} size={30} nameIonicons={"star"} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icoBigger: {
        width: 70, height: 70,
        borderRadius: 70 / 2
    },
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
        flex: 1,
        justifyContent: 'center'
    },
    containFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
