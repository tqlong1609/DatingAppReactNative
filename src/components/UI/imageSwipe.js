import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, PanResponder } from 'react-native'
import PropTypes from 'prop-types'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

const COLOR_ICON = 'white'
export default function ImageSwipe(props) {
    const { style } = props

    const [dXY, setDXY] = useState(null)

    const onChat = () => {
        console.log('on chat')
    }

    const onInformation = () => {
        console.log('on Information')
    }

    const onPress = (evt) => {
        const { locationX, locationY } = evt.nativeEvent
        setDXY({ X: locationX, Y: locationY })
    }

    const onMove = () => {
        console.log('onMove')
        // const { locationX, locationY } = evt.nativeEvent
        // console.log("onMove -> locationY", locationY)
        // console.log("onMove -> locationX", locationX)
    }

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => true,
            onPanResponderGrant: (evt) => {
                onPress(evt)
            },
            // onPanResponderMove: (evt) => onMove(evt),
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y },

            ], { listener: onMove(), useNativeDriver: false }),
            onPanResponderRelease: () => {
                Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
            }
        })

    ).current;

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
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
                            <Ionicons name="chatbox-ellipses" color={COLOR_ICON} size={Themes.Const.SIZE_ICON} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onInformation()}>
                            <Ionicons name="information-circle" color={COLOR_ICON} size={Themes.Const.SIZE_ICON} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>

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
        width: 100,
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
})
