import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import ButtonItemEdit from '/src/components/UI/buttonItemEdit'
import { withTranslation } from 'react-i18next'

//TODO: About you
function MyProfile(props) {
    const { t } = props
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <Image
                    resizeMode={'cover'}
                    style={styles.imgAvatar}
                    source={{ uri: 'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg' }}
                />
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>Trần Long, 21 </Text>
                    <ButtonItemEdit title={t("Gender")} content={"Male"} />
                    <ButtonItemEdit title={t("Age")} content={"18"} />
                    <ButtonItemEdit title={t("Phone")} content={"+84966712391"} />
                    <ButtonItemEdit title={"Email"} content={"tqlong1609@gmail.com"} />
                    <ButtonItemEdit title={t("Location")} content={"Ho Chi Minh, VietNam"} isUnderline={true} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>{t("My Virtues")} </Text>
                    <ButtonItemEdit title={t("Religious beliefs")} content={"Hindu"} />
                    <ButtonItemEdit title={t("Work")} content={"Appscrip"} />
                    <ButtonItemEdit title={t("Job")} content={"Ceo"} />
                    <ButtonItemEdit title={t("Education")} content={"Engineer"} />
                    <ButtonItemEdit title={t("Politics")} content={"Liberal"} />
                    <ButtonItemEdit title={t("Hightest level Attended")} content={"Under Graduation"} isUnderline={true}
                        styleContent={{ width: 100 }}
                    />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>{t("My Vitals")} </Text>
                    <ButtonItemEdit title={t("Ethnicity")} content={"American Indian"} />
                    <ButtonItemEdit title={t("Kids")} content={"Don't have kids"} />
                    <ButtonItemEdit title={t("Family Plans")} content={"NA"} />
                    <ButtonItemEdit title={t("Height")} content={"NA"} isUnderline={true} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>{t("My Vices")} </Text>
                    <ButtonItemEdit title={t("Drinking")} content={"NA"} />
                    <ButtonItemEdit title={t("Smoking")} content={"NA"} isUnderline={true} />
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>
            <ButtonNext isGradient={true} isCheck={true} />
        </View>

    )
}

export default withTranslation()(MyProfile)

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 25, fontWeight: 'bold', color: Themes.Colors.GRAY_DARK
    },
    containerItem: {
        margin: 20
    },
    imgAvatar: {
        height: 400
    },
    container: {
        flex: 1,
    }
})
