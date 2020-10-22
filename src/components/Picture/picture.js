import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import ImagePicker from '/src/components/UI/imagePicker'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
import { withTranslation } from 'react-i18next'
import { Const } from '/src/themes'
function Picture(props) {
    const { t } = props
    const [urlImage, setUrlImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false)
    const onChangeImage = () => {
        setVisibleModel()
    }

    const setVisibleModel = () => {
        setIsVisible(!isVisible)
    }

    const onPressAdd = () => {
        setVisibleModel();
    }

    const onUploadPhoto = () => {
        console.log('object')
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons
                    name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("My best")}</Text>
                <Text style={styles.txtTitle2}>{t("Picture")}</Text>
                <ImagePicker onPressAdd={onPressAdd} t={t} />
            </View>
            {/* <View style={{ flex: 1 }}> */}
            <TouchableOpacity
                onPress={() => onChangeImage()}
                style={styles.btnChange}
            >
                <Text style={styles.txtChange}>{t("Change")}</Text>
            </TouchableOpacity>
            <ButtonNext isGradient={true} />
            {/* </View> */}

            <BottomHalfModel
                numberRow={3}
                isVisible={isVisible} setVisibleModel={setVisibleModel}
            >
                <TouchableOpacity style={styles.btnBetweenContent} onPress={() => onUploadPhoto()}>
                    <Text style={styles.txtContentButton}>{t("Upload photo from gallery")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBottomContent}>
                    <Text style={styles.txtContentButton}>{t('Take photo with camera')}</Text>
                </TouchableOpacity>
            </BottomHalfModel>
        </View>
    )
}

const styles = StyleSheet.create({
    btnBetweenContent: {
        ...Themes.Styles.BtnBetweenContent
    },
    txtContentButton: {
        ...Themes.Styles.TxtContentButton
    },
    btnBottomContent: {
        ...Themes.Styles.BtnBottomContent
    },
    btnChange: {
        // marginLeft: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        position: 'absolute',
        left: Themes.Const.ABSOLUTE_BOTTOM,
        bottom: Themes.Const.ABSOLUTE_BOTTOM + 20,
    },
    txtChange: {
        fontSize: 25,
        color: '#323033',
    },
    containerBottom: {
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

export default withTranslation()(Picture)