import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import PropTypes from 'prop-types'
import Icons from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';



export default function avatarCircle(props) {
    const { url, style } = props;
    const [isVisible, setIsVisible] = useState(false);
    function test() {
        console.log('object')
    }
    function WrapperComponent() {
        return (
            <View >
                {/* <Modal isVisible={isVisible}
                    onBackdropPress={() => setModalVisible(false)}>
                    <View style={{ flex: 1 }}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal> */}
                <Modal
                    isVisible={isVisible}
                    onSwipeComplete={() => setVisibleModel(false)}
                    swipeDirection="left">
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </View>
        )
    }
    function setVisibleModel(isVisible) {
        setIsVisible(isVisible);
    }
    return (
        <TouchableOpacity style={{ ...styles.container, ...style }} onPress={() => setVisibleModel(true)}>
            <Image style={styles.imgAvatar}
                source={url ? url : require('/src/assets/images/my_avatar.jpg')}
            />
            <View style={styles.containerIcon}>
                <Icons name="camera" color={'white'} size={13} style={styles.icon} />
            </View>
            <WrapperComponent />
        </TouchableOpacity>
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
