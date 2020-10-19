import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Container, Header, Body, Title } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import AvatarActive from '/src/components/UI/avatarActive'

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
        return <AvatarActive item={item} sizeAvatar={70} sizeActive={4} />
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

const styles = StyleSheet.create({
    //Flatlist avatar active





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