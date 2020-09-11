import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Themes from '/src/themes'
import Onboarding from 'react-native-onboarding-swiper';
export default function introduction() {
    return (
        <View style={styles.container}>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image
                            style={{ width: 50, height: 50 }}
                            source={require('/src/assets/images/Tinder-Logo.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image
                            style={{ width: 50, height: 50 }}
                            source={require('/src/assets/images/Tinder-Logo.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.Colors.PINK_DARK,
        flex: 1
    }
})
