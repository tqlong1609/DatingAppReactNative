import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import ImagePicker from '/src/components/UI/imagePicker'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
export default function birthDay() {
    const [urlImage, setUrlImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false)
    const onChangeImage = () => {
        setVisibleModel()
    }

    const setVisibleModel = () => {
        setIsVisible(!isVisible)
    }

    const onPressAdd = () => {
        setVisibleModel();
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons
                    name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>My best</Text>
                <Text style={styles.txtTitle2}>Picture</Text>
                <ImagePicker onPressAdd={onPressAdd} />
            </View>
            <TouchableOpacity
                onPress={() => onChangeImage()}
                style={styles.btnChange}
            >
                <Text style={styles.txtChange}>Change</Text>
            </TouchableOpacity>
            <ButtonNext isGradient={true} />
            <BottomHalfModel isVisible={isVisible} setVisibleModel={setVisibleModel} />
        </View>
    )
}
const styles = StyleSheet.create({
    btnChange: {
        marginTop: 35,
        marginLeft: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        width: 90
    },
    txtChange: {
        fontSize: 25,
        color: '#323033',
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
