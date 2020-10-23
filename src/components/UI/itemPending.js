import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Themes from '/src/themes'
export default function itemPending() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image
                resizeMode={'stretch'}
                style={{ width: "100%", height: 400 }}
                source={{ uri: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' }} />
            <View style={{ height: 180, marginHorizontal: 20 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Voice call request received from Long</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons style={{ fontSize: 25, color: Themes.Colors.GRAY_DARK, marginRight: 10 }}
                        name="today" />
                    <Text style={{ color: "#548EB2", fontWeight: 'bold', fontSize: 18 }}>Thursday,Dec 13 @ 09:55 PM</Text>
                </View>
                <View style={{
                    flex: 2, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', flexDirection: 'row'
                }}>
                    <View style={{
                        borderWidth: 1, borderColor: Themes.Colors.GRAY_DARK, borderRadius: 5,
                        width: '65%', height: 50, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 17, color: Themes.Colors.GRAY_BRIGHT_I }}>ReSchedule</Text>
                    </View>
                    <View style={{
                        borderColor: 'green', borderWidth: 2,
                        justifyContent: 'center', alignItems: 'center',
                        height: 50, width: 50, borderRadius: 50 / 2
                    }}>
                        <Ionicons name="checkmark" style={{ color: 'green', fontSize: 30 }}></Ionicons>
                    </View>
                    <View style={{
                        borderColor: 'red', borderWidth: 2,
                        justifyContent: 'center', alignItems: 'center',
                        height: 50, width: 50, borderRadius: 50 / 2
                    }}>
                        <Ionicons name="close" style={{ color: 'red', fontSize: 30 }}></Ionicons>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
