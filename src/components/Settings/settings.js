import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
import Const from '/src/const'
import { useNavigation } from '@react-navigation/native';
import ButtonSettingItem from '/src/components/UI/buttonSettingItem'

// import { useNavigationScreen } from '/src/configs/Navigation/screensNavigation'

export default function settings() {
    const navigation = useNavigation()
    const onPressMyProfile = () => {
        navigation.navigate(Const.NameScreens.MyProfile)
    }
    return (
        <Container style={styles.container}>
            <Header hasTabs
                style={{
                    ...Themes.Styles.HeaderBar,
                    ...styles.header
                }}
            >
                <View style={styles.containerInfor}>
                    <Text style={styles.txtInfo}>Trần Long, 21</Text>
                    <Text style={styles.txtGender}>Male</Text>
                </View>
                <Image
                    style={styles.imgAvatar}
                    source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }} />
            </Header>
            <ButtonSettingItem
                onPressItem={() => onPressMyProfile()}
                isUnderline={true}
                title={"My Profile"} nameIonIcons={"person-outline"} />
            <ButtonSettingItem
                isUnderline={true}
                title={"My Preferences"} nameIonIcons={"people-outline"} />
            <ButtonSettingItem
                title={"Change Languages"} nameIonIcons={"swap-horizontal-outline"} />

        </Container>

    )
}
const SIZE = 100
const MARGIN = 10
const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.Colors.GRAY_BRIGHT_IV
    },
    containerInfor: {
        marginLeft: MARGIN
    },
    txtGender: {
        fontSize: 15,
        marginTop: 7,
        color: Themes.Colors.GRAY_BRIGHT
    },
    header: {
        height: 150, justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtInfo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Themes.Colors.GRAY_DARK
    },
    imgAvatar: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        marginRight: MARGIN
    }
})
