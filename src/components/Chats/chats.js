import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import AvatarActive from '/src/components/UI/avatarActive'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'

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

const dataMessages = [
    {
        id: "1",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        messages: "You have got a gif",
        time: "09:50 PM",
        isRead: false
    },
    {
        id: "2",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        messages: "Có làm thì mới có ăn",
        time: "09:50 PM",
        isRead: true
    },

]

function Chats(props) {
    const { t } = props

    const [isEmpty, setIsEmpty] = useState(false)

    const renderItemAvatarActive = (item, index) => {
        return <AvatarActive item={item} sizeAvatar={60} sizeActive={4} />
    }

    const renderItemMessages = (item, index) => {
        const { name, time, messages, isRead } = item
        console.log("renderItemMessages -> isRead", isRead)
        return (
            <TouchableOpacity style={{
                paddingHorizontal: 10,
                flexDirection: 'row', marginVertical: 10, width: '100%'
            }}>
                <View style={{ flex: 1 }}>
                    <CircleAvatarActive item={item} sizeAvatar={60} sizeActive={3} />
                </View>
                <View style={{ flex: 4, marginVertical: 10 }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={[{ fontSize: 16 },
                        isRead ? { color: Themes.Colors.GRAY_DARK } : { fontWeight: 'bold' }]}>{name}</Text>
                        <Text style={[{ fontSize: 16 },
                        isRead ? { color: Themes.Colors.GRAY_DARK } : { fontWeight: 'bold' }]}>{time}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={[{ fontSize: 13 },
                        isRead ? { color: Themes.Colors.GRAY_DARK } : { fontWeight: 'bold' }]}>{messages}</Text>
                    </View>
                </View>
            </TouchableOpacity>)
    }

    return (
        <View>
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
            <Text style={[styles.txtTitle, { marginTop: 0 }]}>{t("Active Chats")}</Text>
            <View style={isEmpty ? styles.containerBottom : styles.containerBottomMessages}>
                {
                    isEmpty ?
                        <EmptyPerform
                            styleTitle={{ color: Themes.Colors.GRAY_BRIGHT_III }}
                            title={t("You don't have active chats")}
                            source={require('/src/assets/images/oval-empty-outlined-speech-bubble.png')}
                        /> :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={dataMessages}
                            renderItem={({ item, index }) => renderItemMessages(item, index)}
                            keyExtractor={item => item.id}
                        />
                }
            </View>
        </View>
    )
}


Chats.propTypes = {
    t: PropTypes.func.isRequired,
}

const MARGIN = 20

const styles = StyleSheet.create({
    listAvatar: {
        // height: '30%'
        height: 70
    },

    emptyPerform: {
        alignSelf: 'center',
    },

    txtTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#474347',
        marginTop: MARGIN,
        marginLeft: MARGIN,
    },
    containerBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%'
    },
    containerBottomMessages: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '60%',
    }
})

export default withTranslation()(Chats)