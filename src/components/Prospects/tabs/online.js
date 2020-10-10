import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
export default function online() {
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={"Online"}
                source={require('/src/assets/images/my_heart.png')}
                description={"Sorry no potential matches are currently online"}
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
