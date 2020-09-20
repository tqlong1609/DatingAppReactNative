import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
// import Header from '/src/components/UI/header'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
//tabs
import Online from './tabs/online'
import SuperLikedMe from './tabs/superLikedMe'
import LikesMe from './tabs/likesMe'
import MySuperLiked from './tabs/mySuperLiked'
import MyLikes from './tabs/myLikes'

export default function prospects() {
    return (
        // <View>
        //     <Header title={"Prospects"} />
        //     <Tab.Navigator
        //         tabStyle={{ width: 100 }}
        //         swipeEnabled={true}

        //     >
        //         <Tab.Screen name="Online" component={Online} />
        //         <Tab.Screen name="SuperLikedMe" component={SuperLikedMe} />
        //         <Tab.Screen name="LikesMe" component={LikesMe} />
        //         <Tab.Screen name="MySuperLiked" component={MySuperLiked} />
        //         <Tab.Screen name="MyLikes" component={MyLikes} />
        //     </Tab.Navigator>
        // </View>
        <Container>
            <Header
                style={{
                    backgroundColor: 'white', borderBottomWidth: 1,
                    borderBottomColor: Themes.Colors.GRAY_BRIGHT_II
                }}>
                <Body>
                    <Title style={{
                        alignSelf: 'center', color: 'black',
                        fontWeight: 'bold',
                        color: Themes.Colors.GRAY_BRIGHT
                    }}>Prospects</Title>
                </Body>

            </Header>
            <Tabs
                renderTabBar={() => <ScrollableTab
                    underlineStyle={{
                        backgroundColor: Themes.Colors.PINK_DARK,
                        height: 2
                    }}
                />}
            >
                <Tab heading={
                    <TabHeading style={{ backgroundColor: "white" }}>
                        <Text>Online</Text>
                    </TabHeading>
                }>
                    <Online />
                </Tab>
                <Tab heading={
                    <TabHeading style={{ backgroundColor: "white" }}>
                        <Text>SuperLikedMe</Text>
                    </TabHeading>
                }>
                    <SuperLikedMe />
                </Tab>
                <Tab heading={
                    <TabHeading style={{ backgroundColor: "white" }}>
                        <Text>LikesMe</Text>
                    </TabHeading>
                }>
                    <LikesMe />
                </Tab>
                <Tab heading={
                    <TabHeading style={{ backgroundColor: "white" }}>
                        <Text>MySuperLiked</Text>
                    </TabHeading>
                }>
                    <MySuperLiked />
                </Tab>
                <Tab heading={
                    <TabHeading style={{ backgroundColor: "white" }}>
                        <Text>MyLikes</Text>
                    </TabHeading>
                }>
                    <MyLikes />
                </Tab>
            </Tabs>
        </Container>

    )
}

const styles = StyleSheet.create({})