import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import DateTimePicker from '/src/components/UI/dateTimePicker'
import { withTranslation } from 'react-i18next'
function BirthDay(props) {
    const { t } = props
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON}></Ionicons>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("Enter your")}</Text>
                <Text style={styles.txtTitle2}>{t("Birthday")}</Text>
                <DateTimePicker
                    style={styles.inpDateTime}
                    styleText={styles.txtDateTime}
                    modeShow={'date'} />
                <Text style={styles.txtDetail}>{t("Your age will be public")}</Text>
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
})

export default withTranslation()(BirthDay)