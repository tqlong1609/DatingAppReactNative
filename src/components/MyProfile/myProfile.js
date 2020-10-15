import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import ButtonItemEdit from '/src/components/UI/buttonItemEdit'
import { withTranslation } from 'react-i18next'
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5'


function ItemContent(props) {
    const { title, content } = props
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

//TODO: About you
function MyProfile(props) {
    const { t } = props
    const onPressIcon = () => {
        console.log('ico')
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
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
                <ItemContent title={"Name"} content={"Trần Long"} />
                <ItemContent title={"Age"} content={"21"} />
                <ItemContent title={"Gender"} content={"Male"} />
                <ItemContent title={"Phone"} content={"+84966712391"} />
                <ItemContent title={"Email"} content={"Tqlong1609@gmail.com"} />
                <ItemContent title={"Location"} content={"Ho Chi Minh, VietNam"} />

            </ScrollView>
            <ButtonNext isGradient={true} isCheck={true} />
        </View>

    )
}

export default withTranslation()(MyProfile)

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
        marginTop: MARGIN_TOP
    },
    imgAvatar: {
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE / 2,
    },
    container: {
        flex: 1,
    }
})
