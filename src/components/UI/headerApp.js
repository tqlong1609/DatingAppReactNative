import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import AvatarActive from '/src/components/UI/avatarActive'

const item = {
    uriImage: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg",
    isActive: true,
    name: "Long"
}
export default function headerApp() {
    return (
        <View style={[styles.container]}>
            <ButtonBack />
            <AvatarActive item={item} sizeAvatar={50} sizeActive={0} isRow={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    avatarActive: {
        width: 50
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        ...Themes.Styles.shadowButton
    }
})
