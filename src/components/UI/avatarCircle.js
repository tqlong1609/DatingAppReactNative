import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import PropTypes from 'prop-types'
import Icons from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
export default function avatarCircle(props) {
    const { url, style } = props;
    const [isVisible, setIsVisible] = useState(false);
    function setVisibleModel(isVisible) {
        setIsVisible(isVisible);
    }
    console.log('setVisibleModel')

    return (
        <View>
            <TouchableOpacity style={{ ...styles.container, ...style }} onPress={() => setVisibleModel(true)}>
                <Image style={styles.imgAvatar}
                    source={url}
                />
                <View style={styles.containerIcon}>
                    <Icons name="camera" color={'white'} size={13} style={styles.icon} />
                </View>
            </TouchableOpacity>
            <BottomHalfModel isVisible={isVisible} setVisibleModel={setVisibleModel} />
        </View>
    )
}

avatarCircle.prototype = {
    url: PropTypes.string,
}

avatarCircle.defaultProps = {
    url: require('/src/assets/images/my_avatar.jpg')
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
