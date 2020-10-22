import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
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
        time: "09:50 PM"
    },
    {
        id: "2",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        messages: "Có làm thì mới có ăn",
        time: "09:50 PM"
    },

]

function Chats(props) {
    const { t } = props

    const [isEmpty, setIsEmpty] = useState(false)

    const renderItemAvatarActive = (item, index) => {
        return <AvatarActive item={item} sizeAvatar={70} sizeActive={4} />
    }

    const renderItemMessages = (item, index) => {
        return <View style={{ backgroundColor: 'red', flexDirection: 'row', marginVertical: 10 }}>
            <View style={{ backgroundColor: 'blue' }}>
                <CircleAvatarActive item={item} sizeAvatar={70} sizeActive={4} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'yellow', flex: 1, width: '100%' }}>
                    <Text>{item.name}</Text>
                    <Text>{item.time}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{item.messages}</Text>
                </View>
            </View>
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
        </Container>
    )
}


Chats.propTypes = {
    t: PropTypes.func.isRequired,
}

const MARGIN = 20

const styles = StyleSheet.create({
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
    },
    containerBottomMessages: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '60%',
    }
})

export default withTranslation()(Chats)