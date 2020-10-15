import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'

export default function ItemContent(props) {
    const { title, content } = props

    return (
        <View>
            <View style={{
                backgroundColor: Themes.Colors.GRAY_BRIGHT_V,
                height: HEIGHT_HEADER
            }}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>
            <View style={styles.txtContent}>
                <Text style={{ color: '#939093', fontSize: 16 }}>{content}</Text>
            </View>
        </View>
    )
}

const HEIGHT_HEADER = 40
const styles = StyleSheet.create({
    txtHeader: {
        ...Themes.Styles.TextHeader
    },
    txtContent: {
        ...Themes.Styles.TextContent
    },
})
