import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
export default function MyVicesContent(props) {
    return (
        <View>
            <ItemContent title={"Drinking"} content={"NA"} />
            <ItemContent title={"Smoking"} content={"NA"} />
        </View>
    )
}

const styles = StyleSheet.create({})
