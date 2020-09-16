import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

export default function imagePicker() {
    function onPressBtn() {
        console.log('object')
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={{ backgroundColor: 'blue', width: 200, height: 200, alignSelf: 'center', marginTop: 200 }}></View>
            <View style={{
                backgroundColor: 'green', position: 'absolute', zIndex: -1, width: 200, height: 200,
                alignSelf: 'center', marginTop: 180
            }}></View>
            <View style={{
                backgroundColor: 'yellow', position: 'absolute', zIndex: 1, width: 200, height: 200,
                alignSelf: 'center', marginTop: 160
            }}>
                <TouchableOpacity onPress={() => onPressBtn()} style={{
                    width: 100, height: 100, alignSelf: 'center', backgroundColor: 'pink',
                }}>
                    <Text>123</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
