import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {

    }
}, {
    url: '',
    props: {
        // Or you can set source directory.
        source: require('/src/assets/images/my_avatar.jpg')
    }
}]
export default function myAlbums() {
    const [visible, setIsVisible] = useState(true);
    const [isShowMenu, setIsShowMenu] = useState(false)

    const onClickImage = () => {
        setIsShowMenu(!isShowMenu)
    }

    const onLongPressImage = () => {
        isShowMenu && setIsShowMenu(false)
    }

    return (
        <Modal visible={visible} transparent={true}
        >
            {isShowMenu && <View style={styles.containerTabHeader}>
                <TouchableOpacity>
                    <Ionicons
                        size={SIZE_ICON_HEADER}
                        color={'white'}
                        name="chevron-back-outline"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons
                        size={SIZE_ICON_HEADER}
                        color={'white'}
                        name="reorder-three-outline"></Ionicons>
                </TouchableOpacity>
            </View>}
            <ImageViewer imageUrls={images}
                onClick={() => onClickImage()}
                onLongPress={() => onLongPressImage()}
                onSave={(index) => console.log(index)}
            />
            {isShowMenu && <View style={styles.containerTabFooter}>
                <TouchableOpacity>
                    <Ionicons
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="pencil-outline"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="share-social-outline"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="trash-outline"></Ionicons>
                </TouchableOpacity>
            </View>}
        </Modal>
    )
}

const SIZE_ICON_FOOTER = 25
const SIZE_ICON_HEADER = 30
const styles = StyleSheet.create({
    containerTabHeader: {
        ...Themes.Styles.TabMenu,
        justifyContent: 'space-between',

    },
    containerTabFooter: {
        ...Themes.Styles.TabMenu,
        justifyContent: 'space-around',
        bottom: 0
    }
})
