import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import AvatarActive from '/src/components/UI/avatarActive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const item = {
    uriImage: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg",
    isActive: true,
    name: "Long"
}
export default function headerApp() {
    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ButtonBack />
                <AvatarActive item={item} sizeAvatar={50} sizeActive={0} isRow={true} />
            </View>
            <View style={styles.containerButtonHeader}>
                <MaterialCommunityIcons name="calendar-heart" size={Themes.Const.SIZE_ICON - 10}
                    color={Themes.Colors.PINK} />
                <Ionicons name="menu-outline" size={Themes.Const.SIZE_ICON - 6}
                    color={Themes.Colors.PINK}></Ionicons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarActive: {
        width: 50
    },
    containerButtonHeader: {
        marginRight: Themes.Const.MARGIN, flexDirection: 'row',
        width: 90, justifyContent: 'space-between', alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...Themes.Styles.shadowButton
    }
})
