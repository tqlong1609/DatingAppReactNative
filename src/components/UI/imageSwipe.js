import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
const SIZE_ICON = 30
const COLOR_ICON = 'white'
export default function ImageSwipe(props) {
    const { style } = props
    const onChat = () => {
        console.log('on chat')
    }

    const onInformation = () => {
        console.log('on Information')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imgSwipe}
                source={require('/src/assets/images/my_avatar.jpg')}
            />
            <View style={
                styles.containBottom
            }>
                <View>
                    <Text style={styles.txtName}>Lisa, 21</Text>
                    <Text style={styles.txtJob}>Microsoft</Text>
                </View>
                <View style={styles.containRight}>
                    <TouchableOpacity onPress={() => onChat()}>
                        <Ionicons name="chatbox-ellipses" color={COLOR_ICON} size={SIZE_ICON} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onInformation()}>
                        <Ionicons name="information-circle" color={COLOR_ICON} size={SIZE_ICON} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

ImageSwipe.propTypes = {
    style: PropTypes.object,
}

ImageSwipe.defaultProps = {
    style: null
}

const styles = StyleSheet.create({
    txtName: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    txtJob: {
        fontSize: 20,
        color: 'white'
    },
    containBottom: {
        width: '100%', height: 100,
        position: 'absolute', zIndex: 1, bottom: 0,
        justifyContent: 'space-between', flexDirection: 'row',
        padding: Themes.Const.PADDING_IMAGE_SMALL + 10
    },
    container: {
        flex: 1,
        padding: Themes.Const.PADDING_IMAGE_SMALL,
    },
    imgSwipe: {
        width: '100%', height: '100%',
        borderRadius: Themes.Const.BORDER_IMAGE
    },
    containRight: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
})
