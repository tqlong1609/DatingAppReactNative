import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '/src/components/UI/card'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function cardClick(props) {
    const { content, title } = props
    return (
        <Card content={title}>
            <Text style={styles.txtContent}>{content}</Text>
            <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
        </Card>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: Themes.Const.FONT_SIZE_V4,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
})
