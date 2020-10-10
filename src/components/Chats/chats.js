import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'

export default function chats() {
    return (
        <Container>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>Chat</Title>
                </Body>
            </Header>
            <Text style={styles.txtTitle}>Matches</Text>
            <View style={styles.containerActiveChats}>
                <View style={{ width: 70 }}>
                    <Image source={{ uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" }}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                    />
                    <View style={{
                        width: 15, height: 15, backgroundColor: '#36B729', borderRadius: 15 / 2,
                        position: 'absolute', right: 2, bottom: 2
                    }} />
                </View>
                <Text style={{ width: 70, fontSize: 13, textAlign: 'center' }}>
                    Trần Quang Long</Text>
            </View>

            <Text style={styles.txtTitle}>Active Chats</Text>
            <View style={styles.containerBottom}>
                <EmptyPerform
                    styleTitle={{ color: Themes.Colors.GRAY_BRIGHT_III }}
                    title={"You don't have active chats"}
                    source={require('/home/tqlong1609/DatingAppReactNative/src/assets/images/oval-empty-outlined-speech-bubble.png')}
                />
            </View>
        </Container>
    )
}

const MARGIN = 20
const styles = StyleSheet.create({
    emptyPerform: {
        alignSelf: 'center',
    },
    containerEmpty: {
        backgroundColor: 'blue',
        flex: 1
    },
    containerActiveChats: {
        marginTop: MARGIN,
    },
    txtTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#474347',
        marginTop: MARGIN,
        marginLeft: MARGIN
    },
    containerBottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
