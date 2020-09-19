import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function buttonStatus(props) {
    const { color, size, nameFontAwesome5, nameIonicons, style, onPress } = props
    return (
        <TouchableOpacity
            onPress={() => onPress && onPress()}
            style={
                { ...styles.container, ...style }
            } >
            {
                nameFontAwesome5 ?
                    <FontAwesome5 name={nameFontAwesome5}
                        size={size} color={color} style={styles.ico} />
                    :
                    <Ionicons name={nameIonicons}
                        size={size} color={color} style={styles.ico} />}
        </TouchableOpacity>
    )
}

buttonStatus.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    nameFontAwesome5: PropTypes.string,
    onPress: PropTypes.func,
}

buttonStatus.defaultProps = {
    size: null,
    color: null,
    nameFontAwesome5: null,
    onPress: null
}

const styles = StyleSheet.create({
    container: {
        width: 60, height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        ...Themes.Styles.shadowButton,
    },
    ico: {
        alignSelf: 'center'
    }

})