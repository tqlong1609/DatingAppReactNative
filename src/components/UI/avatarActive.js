import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Themes from '/src/themes'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
export default function avatarActive(props) {
    const { item, sizeAvatar, sizeActive, isRow } = props
    return (
        <View
            style={[styles.containerActiveChats, isRow && { flexDirection: 'row' }]}
        >
            <CircleAvatarActive sizeActive={sizeActive} sizeAvatar={sizeAvatar} item={item} />
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
        fontSize: 11, textAlign: 'center'
    },

    containerActiveChats: {
        margin: MARGIN_AVATAR,
        height: '100%',
        marginTop: 0,
        justifyContent: 'center'
    },

})
