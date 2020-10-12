import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import Themes from '/src/themes'
import Const from '/src/const'
import { withTranslation } from 'react-i18next';


function BottomHalfModel(props) {
    const { isVisible, setVisibleModel, t } = props;
    const onUploadPhoto = () => {
        console.log('object')
    }
    return (
        <View >
            <Modal
                deviceWidth={Const.Common.deviceWidth}
                deviceHeight={Const.Common.deviceHeight}
                isVisible={isVisible}
                onSwipeComplete={() => setVisibleModel(false)}
                swipeDirection="down"
            >
                <View style={styles.container}>
                    <View style={styles.containerContent}>
                        <View style={styles.containerHeader}>
                            <Text style={styles.txtHeader}>{t('Confirm action')}</Text>
                        </View>
                        <TouchableOpacity style={styles.btnBetweenContent} onPress={() => onUploadPhoto()}>
                            <Text style={styles.txtContentButton}>{t("Upload photo from gallery")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnBottomContent}>
                            <Text style={styles.txtContentButton}>{t('Take photo with camera')}</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => setVisibleModel(false)}
                    >
                        <Text style={styles.txtCancel}>{t("Cancel")}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const HEIGHT_MODAL = 200;
const COLOR_MODAL = 'white';
const COLOR_CANCEL = '#F96A61';
const COLOR_BORDER_BUTTON = 'black';
const COLOR_HEADER_MODAL = '#9C9A99';
const COLOR_CONTENT_MODAL = '#3493FB';
const BORDER_WIDTH_BUTTON = 0.5;
const BORDER_BUTTON = 10;
const NUMBER_BUTTON = 3;
const FONT_SIZE_BOTTOM = 20;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginLeft: 0,
        flex: 1,
    },
    containerContent: {
        height: HEIGHT_MODAL,
        backgroundColor: 'white',
        borderRadius: BORDER_BUTTON,
    },
    containerHeader: {
        height: HEIGHT_MODAL / NUMBER_BUTTON,
        backgroundColor: COLOR_MODAL,
        borderTopLeftRadius: BORDER_BUTTON,
        borderTopRightRadius: BORDER_BUTTON,
        justifyContent: 'center'
    },
    txtHeader: {
        alignSelf: 'center',
        color: COLOR_HEADER_MODAL,
        fontSize: Themes.Const.FONT_SIZE
    },
    txtContentButton: {
        alignSelf: 'center',
        color: COLOR_CONTENT_MODAL,
        fontWeight: 'bold',
        fontSize: FONT_SIZE_BOTTOM
    },
    btnBetweenContent: {
        height: HEIGHT_MODAL / NUMBER_BUTTON,
        backgroundColor: COLOR_MODAL,
        borderTopWidth: BORDER_WIDTH_BUTTON,
        borderTopColor: COLOR_BORDER_BUTTON,
        borderBottomWidth: BORDER_WIDTH_BUTTON,
        borderBottomColor: COLOR_BORDER_BUTTON,
        justifyContent: 'center'
    },
    btnBottomContent: {
        height: HEIGHT_MODAL / NUMBER_BUTTON,
        backgroundColor: COLOR_MODAL,
        borderBottomLeftRadius: BORDER_BUTTON,
        borderBottomRightRadius: BORDER_BUTTON,
        justifyContent: 'center'
    },
    btnCancel: {
        backgroundColor: COLOR_MODAL,
        height: HEIGHT_MODAL / NUMBER_BUTTON,
        marginTop: 5,
        borderRadius: BORDER_BUTTON,
        justifyContent: 'center'
    },
    txtCancel: {
        alignSelf: 'center',
        color: COLOR_CANCEL,
        fontWeight: 'bold',
        fontSize: FONT_SIZE_BOTTOM
    }
})

export default withTranslation()(BottomHalfModel)