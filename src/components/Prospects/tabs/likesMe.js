import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function likesMe() {
    return (
        <View style={styles.container}>
            <EmptyPerform title={"Liked Me"}
                source={require('/src/assets/images/my_heart.png')}
                description={"Sorry no user has liked your profile yet. Keep your profile fully updated to improve your changes to get liked"}
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


