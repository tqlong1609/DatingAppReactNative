import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function superLikedMe() {
    return (
        <View style={styles.container}>
            <EmptyPerform title={"SuperLiked Me"}
                description={"Sorry no user has super-liked you as yet. Keep your profile fully updated to improve your changes to get matched"}
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

