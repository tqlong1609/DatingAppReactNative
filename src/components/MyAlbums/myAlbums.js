import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageShowModel from '/src/components/Model/imageShowModel'
import AnimationFlatlist from 'react-native-animated-image-list'
import Const from '/src/const';
import Themes from '/src/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonAddImage from '/src/components/UI/buttonAddImage'
let SampleData = [
    { name: '1', title: 'Spiderman', url: 'https://giupban.com.vn/wp-content/uploads/2019/09/hinh-anh-hot-girl-de-thuong-19.jpg', subTitle: 'Dance with' },
    { name: '2', title: 'Stormtrooper', url: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg' },
    { name: '3', title: 'Woody toy', url: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' },
    { name: '4', title: 'Wolverine', url: 'https://zicxa.com/hinh-anh/wp-content/uploads/2019/09/Tuy%E1%BB%83n-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-hot-girl-h%E1%BB%8Dc-sinh-Cute-d%E1%BB%85-th%C6%B0%C6%A1ng-11.jpg' }
]

const ITEM_SIZE = Const.Common.deviceWidth - 120
const ITEM_HEIGHT = Const.Common.deviceHeight / 2
const SIZE_BUTTON = Const.Common.deviceWidth - 200
export default function myAlbums() {
    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0)
    const onPressDetail = (value) => {
        const { item, index } = value
        setIsVisible(true)
        setIndex(index)
    }

    return (
        <View style={{ flex: 1 }}>
            <AnimationFlatlist
                data={SampleData}
                height={ITEM_HEIGHT}
                width={ITEM_SIZE}
                title={'Welcome'}
                subTitle={'Your albums'}
                primaryBackgroundColor={Themes.Colors.PINK}
                secondaryBackgroundColor='#d3d3d3'
                textPrimaryColor='#fff'
                textSecondaryColor='#000'
                onPressDetail={onPressDetail}
                styleButton={{ width: 40, height: 40, position: 'absolute', top: 0, right: 0 }}
                childrenButton={<Ionicons name="resize-outline" size={40} color={"white"}></Ionicons>}
            />
            <ButtonAddImage />
            <ImageShowModel
                index={index}
                images={SampleData}
                visible={visible}
                setIsVisible={setIsVisible}
            />
        </View>

    )
}

const styles = StyleSheet.create({

})
