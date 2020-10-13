import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import { withTranslation } from 'react-i18next'
function EmailAddress(props) {
    const { t } = props
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("Enter your")}</Text>
                <Text style={styles.txtTitle2}>{t("Email Address")}</Text>
                <TextInput placeholder={t('Enter your email address')}
                    style={styles.inpEmail}
                    keyboardType={'email-address'}
                />
                <Text style={styles.txtDetail}>{t("Please enter your email in order to recover your account later")}</Text>
            </View>
            <ButtonNext isGradient={false} />
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
        fontSize: Themes.Const.FONT_SIZE_V3,
        borderBottomWidth: Themes.Const.BORDER_TEXT_INPUT
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

export default withTranslation()(EmailAddress)