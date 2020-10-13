import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'

const data = [
    {
        id: "1",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "2",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "3",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "4",
        isActive: false,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "11",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "21",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
]


function Chats(props) {
    const { t } = props
    const renderItemAvatarActive = (item, index) => {
        return <View
            style={styles.containerActiveChats}
        >
            <View
                style={styles.containerAvatar}
            >
                <Image source={{
                    uri: item.uriImage
                }}
                    style={styles.imgAvatar}
                />
                {
                    item.isActive ?
                        <View style={[styles.viewActive, { backgroundColor: Themes.Colors.GREEN_BRIGHT }]} />
                        :
                        <View style={[styles.viewActive, { backgroundColor: 'gray' }]} />
                }
            </View>
            <Text style={styles.txtName}>
                {item.name}</Text>
        </View>
    }

    return (
        <Container>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>{t("Chats")}</Title>
                </Body>
            </Header>
            <Text style={styles.txtTitle}>{t("Matches")}</Text>
            <FlatList
                style={styles.listAvatar}
                showsHorizontalScrollIndicator={false}
                data={data}
                horizontal={true}
                renderItem={({ item, index }) => renderItemAvatarActive(item, index)}
                keyExtractor={item => item.id}
            />
            <Text style={styles.txtTitle}>{t("Active Chats")}</Text>
            <View style={styles.containerBottom}>
                <EmptyPerform
                    styleTitle={{ color: Themes.Colors.GRAY_BRIGHT_III }}
                    title={t("You don't have active chats")}
                    source={require('/src/assets/images/oval-empty-outlined-speech-bubble.png')}
                />
            </View>
        </Container>
    )
}


Chats.propTypes = {
    t: PropTypes.func.isRequired,
}

const MARGIN = 20
const MARGIN_AVATAR = 10
const SIZE = 70
const SIZE_CIRCLE_ACTIVE = 15
const styles = StyleSheet.create({
    //Flatlist avatar active
    containerActiveChats: {
        margin: MARGIN_AVATAR,
    },
    containerAvatar: {
        width: SIZE
    },
    imgAvatar: {
        width: SIZE, height: SIZE, borderRadius: SIZE / 2
    },
    viewActive: {
        width: SIZE_CIRCLE_ACTIVE, height: SIZE_CIRCLE_ACTIVE, borderRadius: SIZE_CIRCLE_ACTIVE / 2,
        position: 'absolute', right: 2, bottom: 2
    },
    txtName: {
        width: SIZE, fontSize: 13, textAlign: 'center'
    },
    //---------

    listAvatar: {
    },

    emptyPerform: {
        alignSelf: 'center',
    },

    txtTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#474347',
        marginTop: MARGIN,
        marginLeft: MARGIN
    },
    containerBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%'
    }
})

export default withTranslation()(Chats)