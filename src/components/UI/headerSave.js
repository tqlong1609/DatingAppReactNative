import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'

export default function headerSave(props) {
    // const {  } = props
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containSave}>
                <Text style={styles.txtSave}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    containSave: {
        justifyContent: 'center',
        paddingRight: 17
    },
    txtSave: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Themes.Colors.PINK_DARK
    },
})
