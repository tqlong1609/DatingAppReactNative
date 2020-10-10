import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function upComing() {
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={"You have no Upcoming dates"}
                source={require('/src/assets/images/broke.png')}
                description={"Please schedule a date with one of your matches"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


