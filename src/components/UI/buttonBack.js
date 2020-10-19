import React from 'react'
import {
    StyleSheet, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Themes from '/src/themes'

export default function buttonBack() {
    return (
        <TouchableOpacity style={styles.btnIcon}>
            <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        ...Themes.Styles.IconBack,
    },
})
