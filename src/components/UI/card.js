import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'

export default function Card(props) {
    const { children } = props
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.txtTitle}>My current location</Text>
            </View>
            <View style={styles.containerContent}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        justifyContent: 'center', flex: 1
    },
    container: {
        ...Themes.Styles.Card,
    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtTitle: {
        ...Themes.Styles.TitleCard,
    },
})
