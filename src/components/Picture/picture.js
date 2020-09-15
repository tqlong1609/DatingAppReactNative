import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonNext from '/src/components/UI/buttonNext'
import Const from '/src/const'
export default function birthDay() {

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>My best</Text>
                <Text style={styles.txtTitle2}>Picture</Text>
                <View style={styles.containerImagePick}>
                    {/* <Image style={{ backgroundColor: 'red', width: '94%', height: '98%', alignSelf: 'center' }} /> */}
                </View>
            </View>
            <ButtonNext isGradient={false} />
        </View>
    )
}
const styles = StyleSheet.create({
    containerImagePick: {
        width: '80%',
        height: '62%',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },

    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },


})
