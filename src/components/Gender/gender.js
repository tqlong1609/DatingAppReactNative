import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons'
export default function birthDay() {
    const [check, setCheck] = useState(true);
    const onCheck = (isMale) => {
        setCheck(isMale);
    }



    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>Specify your</Text>
                <Text style={styles.txtTitle2}>Gender</Text>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(true)}
                >
                    <Text style={styles.txtGender} >Male</Text>
                    {check && <Icon name="checkmark-outline" style={styles.icoCheck} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(false)}
                >
                    <Text style={styles.txtGender}>Female</Text>
                    {!check && <Icon name="checkmark-outline" style={styles.icoCheck} />}
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnArrowRight}>
                <SimpleLineIcons name="arrow-right" size={25} color={'white'} style={styles.iconNext} />
            </TouchableOpacity>
        </View>
    )
}
const PADDING_VERTICAL = 10;
const styles = StyleSheet.create({
    icoCheck: {
        color: Themes.Colors.PINK_DARK,
        fontSize: 30
    },
    txtGender: {
        fontSize: 20
    },
    btnGender: {
        paddingVertical: PADDING_VERTICAL,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    inpDateTime: {
        borderBottomWidth: 0.5
    },
    txtDateTime: {
        fontSize: Themes.Const.FONT_SIZE_V1 - 5,
        color: Themes.Colors.GRAY_BRIGHT_I
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
