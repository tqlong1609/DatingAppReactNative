import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function myLikes() {
    return (
        <View style={styles.container}>
            <EmptyPerform title={"My Likes"}
                description={"Oops! Seem like you have not swiped right on any profile yet. Update your preferences to get better potential matches"}
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



