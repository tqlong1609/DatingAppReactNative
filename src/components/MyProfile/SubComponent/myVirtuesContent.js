import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
export default function MyVirtuesContent(props) {
    return (
        <View>
            <ItemContent title={"Religious beliefs"} content={"Hindu"} />
            <ItemContent title={"Work"} content={"Appscrip"} />
            <ItemContent title={"Job"} content={"Ceo"} />
            <ItemContent title={"Education"} content={"Engineer"} />
            <ItemContent title={"Politics"} content={"Liberal"} />
            <ItemContent title={"Hightest level Attended"} content={"Under Graduation"} />
        </View>
    )
}

const styles = StyleSheet.create({})
