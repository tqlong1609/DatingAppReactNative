import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'

import Pending from './tabs/pending'
import PastDated from './tabs/pastDated'
import UpComing from './tabs/upComing'

export default function dates() {
    return (
        <Container>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>Dates</Title>
                </Body>
            </Header>
            <Tabs
                tabBarUnderlineStyle={styles.underlineStyle}
            // renderTabBar={() => <ScrollableTab
            //     underlineStyle={styles.underlineStyle}
            // />}
            >
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="Pending">
                    <Pending />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="Past Dated">
                    <PastDated />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading="Upcoming">
                    <UpComing />
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
