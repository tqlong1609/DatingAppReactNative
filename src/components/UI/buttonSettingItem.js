import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

buttonSettingItem.propTypes = {
    title: PropTypes.string.isRequired,
    nameIonIcons: PropTypes.string.isRequired,
    isUnderline: PropTypes.bool,
}

buttonSettingItem.defaultPropTypes = {
    isUnderline: false
}

export default function buttonSettingItem(props) {
    const { title, nameIonIcons, isUnderline, onPressItem } = props
    const onPress = () => {
        onPressItem && onPressItem()
    }
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.button}>
            <View
                style={[
                    styles.container,
                    isUnderline ? styles.underLine : null
                ]}
            >
                <Text style={styles.txtTitle}>{title}</Text>
                <Ionicons name={nameIonIcons} size={30} color={Themes.Colors.GRAY_BRIGHT}></Ionicons>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 17, color: Themes.Colors.GRAY_BRIGHT
    },
    underLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I,
    },
    button: {
        height: 70,
        backgroundColor: 'white'
    },
    container: {
        marginHorizontal: 10 * 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1
    }
})
