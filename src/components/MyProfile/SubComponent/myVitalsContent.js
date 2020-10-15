import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'

export default function MyVitalsContent(props) {
    return (
        <View>
            <ItemContent title={"Ethnicity"} content={"American Indian"} />
            <ItemContent title={"Kids"} content={"Don't have kids"} />
            <ItemContent title={"Family Plans"} content={"NA"} />
            <ItemContent title={"Height"} content={"NA"} />
        </View>
    )
}
const styles = StyleSheet.create({})
