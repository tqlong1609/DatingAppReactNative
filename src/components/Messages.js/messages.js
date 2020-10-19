import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import HeaderApp from '/src/components/UI/headerApp'

const data = [
    { id: "1", value: 1 },
    { id: "11", value: 1 },
    { id: "111", value: 1 },
    { id: "123", value: 1 },
    { id: "133", value: 1 },
    { id: "144", value: 1 },
    { id: "155", value: 1 },
    { id: "166", value: 1 },
    { id: "177", value: 1 },
    { id: "188", value: 1 },
    { id: "199", value: 1 },
    { id: "100", value: 1 },
    { id: "132", value: 1 },

]

export default function messages() {
    const renderItemChat = (item, index) => {
        console.log('object')
        return <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
            <Text>{item.value}</Text></View>
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderApp />
            <FlatList style={{ flex: 1 }}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => renderItemChat(item, index)} />
            <View style={{ height: 40 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({})
