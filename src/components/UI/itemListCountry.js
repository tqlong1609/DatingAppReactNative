import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
export default function ItemListCountry(props) {
    const { item, onPressItem, code, index, indexClick } = props
    const { country, id, source } = item
    let isClick = false
    if (indexClick === null && code === item.code) {
        isClick = true
    }
    else {
        if (index === indexClick) {
            isClick = true
        } else {
            isClick = false
        }
    }
    return (
        <TouchableOpacity
            disabled={isClick ? true : false}
            onPress={() => onPressItem && onPressItem(item, index)}
            style={styles.container}>

            <View style={styles.header}>
                <Image source={source}
                    style={styles.imgFlag}
                />
                <Text style={[styles.txtCountry,
                isClick ? { color: Themes.Colors.PINK_DARK } : { color: 'gray' }
                ]}
                >{country}</Text>
            </View>
            {isClick && <Image source={require("/src/assets/images/check.png")}
                style={styles.imgCheck}
            />}
        </TouchableOpacity>
    )
}

const SIZE = 40
const SIZE_ICON = 25
const styles = StyleSheet.create({
    txtCountry: {
        fontSize: Themes.Const.SIZE_TEXT_ITEM,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgFlag: {
        width: SIZE, height: SIZE,
        marginRight: Themes.Const.MARGIN_HORIZONTAL_INPUT
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgCheck: {
        width: SIZE_ICON, height: SIZE_ICON,
        alignItems: 'center',
    }
})
