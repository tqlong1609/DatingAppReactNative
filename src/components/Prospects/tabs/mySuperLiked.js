import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function mySuperLiked() {
    return (
        <View style={styles.container}>
            <EmptyPerform title={"My SuperLiked"}
                source={require('/src/assets/images/my_heart.png')}
                description={"Oops! Seem like you have not swiped top on any profile yet. Update your preferences to get better potential matches"}
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



