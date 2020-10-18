import React, { useState, useEffect } from 'react';
import {
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
// import Constants from 'expo-constants';
import Accordion from 'react-native-collapsible/Accordion';
import Themes from '/src/themes'
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Animated from 'react-native-reanimated';

import InformationContent from './SubComponent/informationContent'
import MyVicesContent from './SubComponent/myVicesContent'
import MyVirtuesContent from './SubComponent/myVirtuesContent'
import MyVitalsContent from './SubComponent/myVitalsContent'

const CONTENT = [
    {
        title: 'Information',
    },
    {
        title: 'My Virtues',
    },
    {
        title: 'My Vitals',
    },
    {
        title: 'My Vices',
    },
];

export default function MyProfile(props) {
    const [activeSections, setActiveSections] = useState([])
    const [multipleSelect, setMultipleSelect] = useState(false)

    const setSections = sections => {
        setActiveSections(sections.includes(undefined) ? [] : sections)
    };

    const renderHeader = (section, _, isActive) => {
        return (
            <View
                style={[styles.header, isActive ? styles.active : styles.inactive]}
            >
                <Text style={styles.headerText}>{section.title}</Text>
                <Animated.View duration={400}
                    style={{ transform: isActive ? [{ rotate: "180deg" }] : [{ rotate: "0deg" }] }}
                >
                    <IconAwesome5 name="caret-down" size={20} color={Themes.Colors.PINK} />
                </Animated.View>
            </View>
        );
    };

    const renderContent = (section, _, isActive) => {
        const { title } = section
        switch (title) {
            case "Information":
                return (
                    <InformationContent />
                );
            case "My Virtues":
                return (
                    <MyVirtuesContent />
                )
            case "My Vitals":
                return (
                    <MyVitalsContent />
                )
            case "My Vices":
                return (
                    <MyVicesContent />
                )
        }
    }

    const onPressIcon = () => {

    }

    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.parent}>
                    <View style={styles.child}>
                        <View style={styles.containerHeader}>
                            <View>
                                <Image
                                    resizeMode={'cover'}
                                    style={styles.imgAvatar}
                                    source={{ uri: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' }}
                                />
                                <TouchableOpacity
                                    onPress={() => onPressIcon()}
                                    style={styles.containIcon}>
                                    <IconAwesome5
                                        style={styles.icon}
                                        color={"white"} name="pencil-alt" size={SIZE_ICON / 2} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.txtInfo}>Long, 21</Text>
                            <Text style={styles.txtDetail}>Tqlong1609@gmail.com</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.multipleToggle}>
                    <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
                    <Switch
                        value={multipleSelect}
                        onValueChange={a => setMultipleSelect(a)}
                    />
                </View>
                <Accordion
                    activeSections={activeSections}
                    sections={CONTENT}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={multipleSelect}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                />
            </ScrollView>
        </View>
    );
}

const SIZE = 160
const SIZE_ICON = 35
const MARGIN_TOP = 20
const styles = StyleSheet.create({
    parent: {
        height: 300,
        width: '100%',
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
        ...Themes.Styles.shadowButton
        // position: 'absolute'
    },
    child: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: '#F0076C', padding: 5, borderRadius: SIZE_ICON / 2
    },
    containIcon: {
        // borderColor: 'red',
        // borderWidth: 2,
        width: SIZE_ICON,
        height: SIZE_ICON,
        borderRadius: SIZE_ICON / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 15,
        backgroundColor: 'white',
    },
    txtDetail: {
        fontSize: 15,
        marginTop: MARGIN_TOP / 4
    },
    txtInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: MARGIN_TOP / 2

    },
    containerHeader: {
        alignItems: 'center',
    },
    imgAvatar: {
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE / 2,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Colors.PINK
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'white'
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});