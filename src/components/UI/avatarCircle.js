import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

export default function avatarCircle(props) {
    const { url } = props;

    return (
        <View>
            <Image
                style={styles.imgAvatar}
                resizeMode={'stretch'}
                source={url} />
        </View>
    )
}

avatarCircle.prototype = {
    url: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    imgAvatar: {
        width: 100,
        height: 100
    }
})
