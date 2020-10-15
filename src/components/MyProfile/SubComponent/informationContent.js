import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
export default function InformationContent(props) {
    return (
        <View>
            <ItemContent title={"Name"} content={"Trần Long"} />
            <ItemContent title={"Age"} content={"21"} />
            <ItemContent title={"Gender"} content={"Male"} />
            <ItemContent title={"Phone"} content={"+84966712391"} />
            <ItemContent title={"Email"} content={"Tqlong1609@gmail.com"} />
            <ItemContent title={"Location"} content={"Ho Chi Minh, VietNam"} />
        </View>
    )
}

const styles = StyleSheet.create({})
