import React from 'react'
import Themes from '/src/themes'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ItemsReligious(props) {
    const { item, onPressItem } = props;
    const { id, name, isClick } = item;
    // console.log("ItemsReligious -> isClick", isClick)
    return (
        <TouchableOpacity
            style={styles.containerReligious}
            onPress={() => onPressItem(item)}
            disabled={isClick ? true : false}>
            <Text style={[
                styles.txtReligious,
                isClick ? { color: Themes.Colors.PINK_DARK } : { color: 'gray' }
            ]}>
                {name}
            </Text>
            {isClick && <Ionicons name="checkmark-outline" style={styles.icoCheck} />}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    containerReligious: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtReligious: {
        fontSize: 20,

    },
    icoCheck: {
        color: Themes.Colors.PINK_DARK,
        fontSize: 30
    },
})
