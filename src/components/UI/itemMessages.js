import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
import { withTranslation } from 'react-i18next';
import Utils from '/src/utils'
import Themes from '/src/themes'
import Const from '/src/const'
const width_screen = Const.Common.deviceWidth
function ItemMessages(props) {
    const { t, item, onPressMessages, idUser } = props
    const { name, dateRead, content, messageSent, recipientId, type } = item

    const [dateMess, setDateMess] = useState(() => {
        return Utils.Calculator.getFormatDayFlexible(messageSent)
    });

    const checkIsRead = () => {
        if (dateRead !== null || recipientId !== idUser) {
            return true
        }
        else {
            return false
        }
    }

    const checkContent = (content) => {
        if (
            recipientId === idUser
        ) {
            switch (type) {
                case Const.TypeSend.GIF:
                    return t('You have got a gif')
                case Const.TypeSend.IMAGE:
                    return t('You have got a image')
                case Const.TypeSend.LOCATION:
                    return t('You have got a location')
                default:
                    return content
            }
        }
        else {
            switch (type) {
                case Const.TypeSend.GIF:
                    return t('You have send a gif')
                case Const.TypeSend.IMAGE:
                    return t('You have send a image')
                case Const.TypeSend.LOCATION:
                    return t('You have send a location')
                default:
                    return t('Me') + " : " + content
            }
        }
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => onPressMessages && onPressMessages(item)}
        >
            <View style={styles.containerAvatar}>
                <CircleAvatarActive
                    dataHeader={item} sizeAvatar={70} sizeActive={3} />
            </View>
            <View style={{ flex: 4, marginVertical: 15 }}>
                <View style={styles.containerContent}>
                    <Text style={[styles.txtName,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}
                    >{name}</Text>
                    <Text style={[styles.txtContent,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}>{dateMess}</Text>
                </View>
                <View style={styles.containerMessages}>
                    <Text style={[styles.txtMessages,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}
                    >{checkContent(content)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
    containerMessages: {
        justifyContent: 'center',
        marginRight: 10,
        width: width_screen - 110
    },
    txtNotIsRead: {
    },
    txtIsRead: {
        color: Themes.Colors.GRAY_BRIGHT_I,
    },
    txtMessages: {
        fontSize: 13,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    txtName: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontBoldExtra,
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    containerAvatar: {
        flex: 1
    },
    container: {
        marginTop: 0,
        flexDirection: 'row', marginVertical: Themes.Const.MARGIN_AVATAR, width: '100%',
        marginLeft: Themes.Const.MARGIN_AVATAR,
    },
})
export default withTranslation()(ItemMessages)
