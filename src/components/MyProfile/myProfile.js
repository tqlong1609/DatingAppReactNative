import React, { useState } from 'react';
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
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Themes from '/src/themes'
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BACON_IPSUM =
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
    {
        title: 'First',
        content: BACON_IPSUM,
    },
    {
        title: 'Second',
        content: BACON_IPSUM,
    },
    {
        title: 'Third',
        content: BACON_IPSUM,
    },
    {
        title: 'Fourth',
        content: BACON_IPSUM,
    },
    {
        title: 'Fifth',
        content: BACON_IPSUM,
    },
];

const SELECTORS = [
    {
        title: 'First',
        value: 0,
    },
    {
        title: 'Third',
        value: 2,
    },
    {
        title: 'None',
    },
];

export default function MyProfile(props) {
    const [activeSections, setActiveSections] = useState([])
    const [collapsed, setCollapsed] = useState(true)
    const [multipleSelect, setMultipleSelect] = useState(false)

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const setSections = sections => {
        setActiveSections(sections.includes(undefined) ? [] : sections)
        // this.setState({
        //     activeSections: sections.includes(undefined) ? [] : sections,
        // });
    };

    const renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        return (
            <ItemContent title={"Name"} content={"Trần Long"} isActive={isActive} />
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
                <View style={styles.containerHeader}>
                    <View>
                        <Image
                            resizeMode={'cover'}
                            style={styles.imgAvatar}
                            source={{ uri: 'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg' }}
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
                <View style={styles.multipleToggle}>
                    <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
                    <Switch
                        value={multipleSelect}
                        onValueChange={a => setMultipleSelect(a)}
                    />
                </View>
                <Collapsible collapsed={collapsed} align="center">
                    <View style={styles.content}>
                        <Text>
                            Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                            ribs
                        </Text>
                    </View>
                </Collapsible>
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

function ItemContent(props) {
    const { title, content, isActive } = props

    return (
        <View>
            <View style={{
                backgroundColor: Themes.Colors.GRAY_BRIGHT_V,
                height: HEIGHT_HEADER
            }}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>
            <View style={styles.txtContent}>
                <Text style={{ color: '#939093', fontSize: 16 }}>{content}</Text>
            </View>
        </View>
    )
}

const SIZE = 160
const SIZE_ICON = 35
const MARGIN_TOP = 20
const HEIGHT_HEADER = 40
const styles = StyleSheet.create({
    txtContent: {
        ...Themes.Styles.TextContent
    },
    txtHeader: {
        ...Themes.Styles.TextHeader
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
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
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
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
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