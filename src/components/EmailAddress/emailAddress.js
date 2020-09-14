import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Themes from '/src/themes'

export default function emailAddress() {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>Enter your</Text>
                <Text style={styles.txtTitle2}>Email address</Text>
                <TextInput placeholder={'Enter your email address'}
                    style={styles.inpEmail}
                    keyboardType={'email-address'}
                />
                <Text style={styles.txtDetail}>Please enter your email in order to recover your account later</Text>
            </View>
            <TouchableOpacity style={styles.btnArrowRight}>
                <SimpleLineIcons name="arrow-right" size={25} color={'white'} style={styles.iconNext} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    inpEmail: {
        fontSize: Themes.Const.FONT_SIZE_V1 - 5,
        borderBottomWidth: 0.5
    },
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    btnArrowRight: {
        ...Themes.Styles.ButtonBottomNext
    },
    iconNext: {
        alignSelf: 'center',
        marginLeft: 5
    }
})
