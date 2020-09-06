import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import Icons from 'react-native-vector-icons/FontAwesome'


export default function avatarCircle(props) {
    const { url, style } = props;
    return (
        <View style={{ ...styles.container, ...style }}>
            <Image style={styles.imgAvatar}
                source={url ? url : require('/src/assets/images/my_avatar.jpg')}
            />
            <View style={styles.containerIcon}>
                <Icons name="camera" color={'white'} size={13} style={styles.icon} />
            </View>
        </View>
    )
}

avatarCircle.prototype = {
    url: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    containerIcon: {
        width: 25,
        height: 25,
        borderRadius: 14.5,
        backgroundColor: '#C6CACB',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    icon: {
        alignSelf: 'center'
    }
})
