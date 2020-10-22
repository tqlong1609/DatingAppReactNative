import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Themes from '/src/themes'

export default function circleAvatarActive(props) {
    const { item, sizeAvatar, sizeActive } = props
    const { uriImage, isActive } = item
    return (
        <View
            style={[styles.containerAvatar, { width: sizeAvatar }]}
        >
            <Image
                // source={{
                //     uri: uriImage
                // }
                // }
                source={require('/src/assets/images/my_avatar.jpg')}
                style={[styles.imgAvatar, { width: sizeAvatar, height: sizeAvatar, borderRadius: sizeAvatar / 2 }]}
            />
            {
                isActive ?
                    <View style={[styles.viewActive, { backgroundColor: Themes.Colors.GREEN_BRIGHT, right: sizeActive, bottom: sizeActive }]} />
                    :
                    <View style={[styles.viewActive, { backgroundColor: 'gray', right: sizeActive, bottom: sizeActive }]} />
            }
        </View>
    )
}

const SIZE_CIRCLE_ACTIVE = 13
const styles = StyleSheet.create({
    imgAvatar: {},
    containerAvatar: {
    },
    viewActive: {
        width: SIZE_CIRCLE_ACTIVE, height: SIZE_CIRCLE_ACTIVE, borderRadius: SIZE_CIRCLE_ACTIVE / 2,
        position: 'absolute'
    },
})
