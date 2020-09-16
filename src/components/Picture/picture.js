import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonNext from '/src/components/UI/buttonNext'
import Const from '/src/const'
export default function birthDay() {
    const onPressAdd = () => {
        console.log('object')
    }
    function onPressBtn() {
        console.log('object')
    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>

            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>My best</Text>
                <Text style={styles.txtTitle2}>Picture</Text>

                <View style={styles.containerViewImage}>
                    <View style={styles.containerRotate} />
                    <View style={styles.containerImage} />
                    <View style={styles.containerPicker}>
                        <TouchableOpacity style={styles.containerIcon} onPress={() => onPressAdd()}>
                            <Icon name="add-outline" size={50} style={styles.icoAdd} />
                        </TouchableOpacity>
                        <Text style={styles.txtAddPhoto}>Add your photo</Text>
                    </View>
                </View>

            </View>
            <ButtonNext isGradient={true} />
        </View>
    )
}
const styles = StyleSheet.create({
    icoAdd: {
        color: '#BDB6BB',
        alignSelf: 'center'
    },
    txtAddPhoto: {
        color: '#BDB6BB',
        fontSize: 25,
        alignSelf: 'center'
    },
    containerIcon: {
        justifyContent: 'center',
        borderWidth: 2.5,
        borderColor: '#BDB6BB',
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    containerPicker: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'space-between',
        elevation: 7,
        position: 'absolute', zIndex: 1,
        marginTop: 160,
    },
    image: {
        backgroundColor: 'red', width: '100%', height: '100%', alignSelf: 'center',
        borderRadius: 10,
    },
    containerViewImage: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        height: '67%',
    },
    containerImage: {
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        alignSelf: 'center',
    },
    containerRotate: {
        width: '100%',
        height: '100%',
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
        elevation: 3,
        transform: [{ rotate: "-7deg" }],
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
