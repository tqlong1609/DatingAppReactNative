import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageShowModel from '/src/components/Model/imageShowModel'
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
    const [visible, setIsVisible] = useState(false);
    return (
        <View>
            <Text>OK</Text>
            <ImageShowModel
                index={1}
                images={images}
                visible={visible}
                setIsVisible={setIsVisible} />
        </View>

    )
}

const styles = StyleSheet.create({

})
