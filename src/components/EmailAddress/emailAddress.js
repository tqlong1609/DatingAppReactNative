import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
export default function emailAddress() {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="arrow-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <View>
                <Text>Enter your</Text>
                <Text>Birthday</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    btnIcon: {
        ...Themes.Styles.IconBack
    },
})
