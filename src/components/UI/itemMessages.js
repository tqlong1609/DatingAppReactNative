import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
import Themes from '/src/themes'

export default function itemMessages(props) {
    const { item, onPressMessages } = props
    const { name, time, messages, isRead } = item
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => onPressMessages && onPressMessages()}
        >
            <View style={styles.containerAvatar}>
                <CircleAvatarActive
                    item={item} sizeAvatar={60} sizeActive={3} />
            </View>
            <View style={{ flex: 4, marginVertical: 10 }}>
                <View style={styles.containerContent}>
                    <Text style={[styles.txtContent,
                    isRead ? styles.txtIsRead : styles.txtNotIsRead]}>{name}</Text>
                    <Text style={[styles.txtContent,
                    isRead ? styles.txtIsRead : styles.txtNotIsRead]}>{time}</Text>
                </View>
                <View style={styles.containerMessages}>
                    <Text style={[styles.txtContent,
                    isRead ? styles.txtIsRead : styles.txtNotIsRead]}>{messages}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerMessages: {
        flex: 1, justifyContent: 'center'
    },
    txtNotIsRead: {
        fontWeight: 'bold'
    },
    txtIsRead: {
        color: Themes.Colors.GRAY_DARK
    },
    txtContent: {
        fontSize: 14
    },
    containerContent: {
        flexDirection: 'row', justifyContent: 'space-between', width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    containerAvatar: {
        flex: 1
    },
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row', marginVertical: 10, width: '100%'
    },
})
