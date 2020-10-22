import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import AvatarActive from '/src/components/UI/avatarActive'
import ItemMessages from '/src/components/UI/itemMessages'
import { useNavigation } from '@react-navigation/native';
import Const from '/src/const'

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
    const navigation = useNavigation();

    const [isEmpty, setIsEmpty] = useState(false)


    const onPressMessages = () => {
        navigation.navigate(Const.NameScreens.Messages)
    }

    const renderItemAvatarActive = (item, index) => {
        return <AvatarActive item={item} sizeAvatar={60} sizeActive={4} />
    }

    const renderItemMessages = (item, index) => {
        return <ItemMessages item={item}
            onPressMessages={() => onPressMessages()}
        />
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