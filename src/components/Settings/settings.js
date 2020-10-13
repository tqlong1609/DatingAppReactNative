import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
import Const from '/src/const'
import { useNavigation } from '@react-navigation/native';
import ButtonSettingItem from '/src/components/UI/buttonSettingItem'
import { withTranslation } from 'react-i18next';

function Settings(props) {
    const { t } = props
    const navigation = useNavigation()
    const onPressMyProfile = () => {
        navigation.navigate(Const.NameScreens.MyProfile)
    }

    const onPressMultiLanguages = () => {
        navigation.navigate(Const.NameScreens.MultiLanguages)
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
                    <Text style={styles.txtGender}>{t("Male")}</Text>
                </View>
                <Image
                    style={styles.imgAvatar}
                    source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }} />
            </Header>
            <ButtonSettingItem
                onPressItem={() => onPressMyProfile()}
                isUnderline={true}
                title={t("My Profile")} nameIonIcons={"person-outline"} />
            <ButtonSettingItem
                isUnderline={true}
                title={t("My Albums")} nameIonIcons={"images-outline"} />
            <ButtonSettingItem
                isUnderline={true}
                title={t("My Preferences")} nameIonIcons={"people-outline"} />
            <ButtonSettingItem
                onPressItem={() => onPressMultiLanguages()}
                isUnderline={true}
                title={t("Change Languages")} nameIonIcons={"swap-horizontal-outline"} />
            <ButtonSettingItem
                isUnderline={false}
                title={t("Logout")} nameIonIcons={"log-out-outline"} />
        </Container>
    )
}

export default withTranslation()(Settings)

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