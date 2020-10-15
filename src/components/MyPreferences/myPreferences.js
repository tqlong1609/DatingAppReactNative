import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Card from '/src/components/UI/card'
export default function MyPreferences() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <Text style={styles.txtHeader}>My Preferences</Text>
            <Card>
                <Text style={styles.txtContent}>Ho Chi Minh City, VietNam</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: 18,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: Themes.Colors.GRAY_BRIGHT_IV
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
})
