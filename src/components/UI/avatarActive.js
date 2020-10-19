import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Themes from '/src/themes'

export default function avatarActive(props) {
    const { item, sizeAvatar, sizeActive, isRow } = props
    return (
        <View
            style={[styles.containerActiveChats, isRow && { flexDirection: 'row' }]}
        >
            <View
                style={[styles.containerAvatar, { width: sizeAvatar }]}
            >
                <Image source={{
                    uri: item.uriImage
                }}
                    style={[styles.imgAvatar, { width: sizeAvatar, height: sizeAvatar, borderRadius: sizeAvatar / 2 }]}
                />
                {
                    item.isActive ?
                        <View style={[styles.viewActive, { backgroundColor: Themes.Colors.GREEN_BRIGHT, right: sizeActive, bottom: sizeActive }]} />
                        :
                        <View style={[styles.viewActive, { backgroundColor: 'gray', right: sizeActive, bottom: sizeActive }]} />
                }
            </View>
            <View style={isRow && styles.containerChat}>
                <Text style={[styles.txtName, { width: sizeAvatar },
                isRow && styles.txtNameRow]}>
                    {item.name}</Text>
                {isRow && <Text style={styles.txtActiveNow}>
                    Active Now</Text>}
            </View>

        </View>
    )
}

const MARGIN_AVATAR = 10
const SIZE_CIRCLE_ACTIVE = 13
const styles = StyleSheet.create({
    txtActiveNow: {
        fontSize: 13, alignSelf: 'center', color: Themes.Colors.GRAY_BRIGHT
    },
    txtNameRow: {
        textAlign: 'left', fontWeight: 'bold', fontSize: 18
    },
    containerChat: {
        justifyContent: 'space-between', paddingLeft: 10
    },
    txtName: {
        fontSize: 13, textAlign: 'center'
    },
    viewActive: {
        width: SIZE_CIRCLE_ACTIVE, height: SIZE_CIRCLE_ACTIVE, borderRadius: SIZE_CIRCLE_ACTIVE / 2,
        position: 'absolute'
    },
    imgAvatar: {

    },
    containerActiveChats: {
        margin: MARGIN_AVATAR,
    },
    containerAvatar: {
    },
})
