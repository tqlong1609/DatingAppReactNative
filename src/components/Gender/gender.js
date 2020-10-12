import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonNext from '/src/components/UI/buttonNext'
import { withTranslation } from 'react-i18next'
function BirthDay(props) {
    const { t } = props
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
                <Text style={styles.txtTitle}>{t("Specify your")}</Text>
                <Text style={styles.txtTitle2}>{t("Gender")}</Text>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(true)}
                >
                    <Text style={[styles.txtGender, check ? { color: 'black' } : { color: 'gray' }]} >{t("Male")}</Text>
                    {check && <Icon name="checkmark-outline" style={styles.icoCheck} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(false)}
                >
                    <Text style={[styles.txtGender, !check ? { color: 'black' } : { color: 'gray' }]} >{t("Female")}</Text>
                    {!check && <Icon name="checkmark-outline" style={styles.icoCheck} />}
                </TouchableOpacity>
            </View>
            <ButtonNext isGradient={true} />



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
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
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


})

export default withTranslation()(BirthDay)
