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
                        backgroundColor: Themes.Colors.PINK_DARK,
                        image: <Image
                            style={styles.image}
                            source={require('/src/assets/images/icons8-tinder-500.png')} />,
                        title: 'Get a Date',
                        subtitle: 'Swipe right to get a match with people you like from your area',
                    },
                    {
                        backgroundColor: Themes.Colors.PINK_DARK,
                        image: <Image
                            style={styles.image}
                            source={require('/src/assets/images/icons8-wechat-512.png')} />,
                        title: 'Private Messages',
                        subtitle: 'Chat privately with people you match',
                    },
                    {
                        backgroundColor: Themes.Colors.PINK_DARK,
                        image: <Image
                            style={styles.image}
                            source={require('/src/assets/images/icons8-google-images-480.png')} />,
                        title: 'Send Photo',
                        subtitle: 'Have fun with your matches by sending photos to each other',
                    },
                    {
                        backgroundColor: Themes.Colors.PINK_DARK,
                        image: <Image
                            style={styles.image}
                            source={require('/src/assets/images/icons8-google-alerts-512.png')} />,
                        title: 'Get Notified',
                        subtitle: 'Receive notifications when you get new messages and matches',
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
    },
    image: {
        width: 130, height: 130
    }
})
