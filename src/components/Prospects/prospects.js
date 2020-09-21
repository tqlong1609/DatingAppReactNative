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
        <Container>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>Prospects</Title>
                </Body>
            </Header>
            <Tabs
                renderTabBar={() => <ScrollableTab
                    underlineStyle={styles.underlineStyle}
                />}
            >
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="Online">
                    <Online />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="SuperLikedMe">
                    <SuperLikedMe />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="LikesMe">
                    <LikesMe />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="MySuperLiked">
                    <MySuperLiked />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="MyLikes">
                    <MyLikes />
                </Tab>
            </Tabs>
        </Container>

    )
}

const styles = StyleSheet.create({
    underlineStyle: {
        ...Themes.Styles.underlineScrollTab
    },
    activeTextStyle: {
        ...Themes.Styles.ActiveTextTab
    },
    textStyle: {
        ...Themes.Styles.TextTab
    },
    activeTabStyle: {
        ...Themes.Styles.ActiveTab
    },
    tabStyle: {
        ...Themes.Styles.Tab
    },
    tabHeader: {
        ...Themes.Styles.TabHeader
    }
})