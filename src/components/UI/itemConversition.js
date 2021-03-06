import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Image from 'react-native-fast-image'
import Themes from '/src/themes'
import Utils from '/src/utils'
import Const from '/src/const'
import moment from 'moment'

const width_screen = Const.Common.deviceWidth
export default function itemConversition(props) {
    const { item, idUser, dataMessages, index, onPressLocationLink } = props
    const { senderPhotoUrl, content, senderId, type, senderName, messageSent } = item

    const [dateMess, setDateMess] = useState(() => {
        return Utils.Calculator.getFormatDayFlexible(messageSent)
    });
    const [width, setWidth] = useState(null)
    let stylesMess
    let isShowImage = false
    const idPre = index - 1
    const idNex = index + 1
    const length = dataMessages.length
    if (index === 0) {
        if (index + 1 === length) {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
        else {
            if (dataMessages[idNex].senderId === dataMessages[index].senderId) {
                stylesMess = senderId === idUser ? styles.containTxtMessagesHeaderTypeSender : styles.containTxtMessagesHeader
                isShowImage = true
            }
            else {
                stylesMess = styles.containTxtMessagesAlone
                isShowImage = true
            }
        }
    } else if (index > 0 && index < length - 1) {
        if (dataMessages[idPre].senderId === dataMessages[index].senderId && dataMessages[idNex].senderId === dataMessages[index].senderId) {
            stylesMess = senderId !== idUser ? styles.containTxtMessagesBetween : styles.containTxtMessagesBetweenTypeSender

            // stylesMess = styles.containTxtMessagesBetween
        }
        else if (dataMessages[idPre].senderId !== dataMessages[index].senderId && dataMessages[idNex].senderId === dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesHeaderTypeSender : styles.containTxtMessagesHeader
            isShowImage = true
        }
        else if (dataMessages[idPre].senderId === dataMessages[index].senderId && dataMessages[idNex].senderId !== dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesBottomTypeSender : styles.containTxtMessagesBottom
        }
        else {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
    }
    else if (index === length - 1) {
        if (dataMessages[idPre].senderId === dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesBottomTypeSender : styles.containTxtMessagesBottom
        }
        else if (dataMessages[idPre].senderId !== dataMessages[index].senderId) {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
    }

    return (
        <View>
            {/* <Text style={{
                alignSelf: 'center', marginVertical: 10, color: Themes.Colors.GRAY_BRIGHT_III,
                fontFamily: Themes.FontFamily.FontMediumDefault
            }}>{getTime(messageSent)}</Text> */}
            <View style={[{ marginBottom: 5 },
            senderId !== idUser
                ? { flexWrap: 'wrap' }
                : { flexWrap: 'wrap-reverse' }
            ]
            }
            >
                {senderId !== idUser ? <View>
                    <View style={[styles.containMessage]}>
                        {isShowImage && <Image
                            style={styles.image}
                            source={{ uri: senderPhotoUrl }}
                        />}
                        <View style={[stylesMess, !isShowImage ? { marginLeft: 45 + MARGIN_LEFT } : {
                            marginLeft: MARGIN_LEFT,
                        }, width !== null && { width: width }, type === Const.TypeSend.TEXT && { ...Themes.Styles.shadowButton }]}
                            onLayout={(event) => {
                                var { x, y, width, height } = event.nativeEvent.layout;
                                if (width > width_screen - 90) {
                                    setWidth(width_screen - 90)
                                }
                            }}
                        >
                            {(type === Const.TypeSend.IMAGE || type === Const.TypeSend.GIF) && <Image source={{ uri: content }}
                                style={{ width: 150, height: 150 }}
                                resizeMode={'stretch'}
                            />}
                            {type === Const.TypeSend.TEXT && <Text style={[styles.txtMessage, width !== null && { width: width_screen - 110 }]}>{content}</Text>}
                            {type === Const.TypeSend.LOCATION && <TouchableOpacity
                                onPress={() => onPressLocationLink && onPressLocationLink(item)}
                            >
                                <Text style={styles.linkLocation}>Open Location {senderName}</Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={styles.txtTimeReceive}>{dateMess}</Text>
                </View> :
                    <View style={[width !== null && { width: width, marginRight: 50 }]}
                        onLayout={(event) => {
                            var { x, y, width, height } = event.nativeEvent.layout;
                            if (width > width_screen - 50) {
                                setWidth(width_screen - 50)
                            }
                        }}
                    >
                        <View style={styles.containMessage}>
                            <View style={[stylesMess, !isShowImage ? { marginRight: 40 + MARGIN_LEFT } : {},
                                width !== null && { width: width_screen - 120 }, type === Const.TypeSend.TEXT && { backgroundColor: '#009AFF' }]}>
                                {(type === Const.TypeSend.IMAGE || type === Const.TypeSend.GIF) && <Image source={{ uri: content }}
                                    style={{ width: 150, height: 150 }}
                                    resizeMode={'stretch'}
                                />}
                                {type === Const.TypeSend.TEXT && <Text style={[styles.txtMessage, { color: 'white' }]}>{content}</Text>}
                                {type === Const.TypeSend.LOCATION && <TouchableOpacity
                                    onPress={() => onPressLocationLink && onPressLocationLink(item)}
                                >
                                    <Text style={styles.linkLocation}>Open Location {senderName}</Text>
                                </TouchableOpacity>
                                }
                            </View>
                            {isShowImage && <Image
                                style={[styles.image, { marginRight: 12 }]}
                                source={{ uri: senderPhotoUrl }}
                            />}
                        </View>
                        <Text style={styles.txtTimeSender}>{dateMess}</Text>

                    </View>}
            </View>
        </View>
    )
}

const containTxt = {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
    // width: 300
}

const SIZE_IMAGE = 35
const SIZE_RADIUS = 15
const MARGIN_LEFT = 15
const styles = StyleSheet.create({
    txtTimeSender: {
        fontFamily: Themes.FontFamily.FontThinDefault,
        fontSize: 12,
        marginLeft: 10,
    },
    txtTimeReceive: {
        fontFamily: Themes.FontFamily.FontThinDefault,
        fontSize: 12,
        marginLeft: 10,
        alignSelf: 'flex-end'
    },
    linkLocation: {
        color: 'blue',
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontMediumDefault,
        textDecorationLine: 'underline'
    },
    text: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5
    },

    containTxtMessagesBetweenTypeSender: {
        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
        marginBottom: 2,
    },

    containTxtMessagesHeaderTypeSender: {
        ...containTxt,
        borderBottomLeftRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        borderTopLeftRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesHeader: {
        ...containTxt,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesBottomTypeSender: {

        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        marginTop: 10,
        marginBottom: 2,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesBottom: {
        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginTop: 10,
        marginBottom: 2,
        marginLeft: MARGIN_LEFT,

    },
    containTxtMessagesAlone: {
        ...containTxt,
        borderRadius: SIZE_RADIUS,
        marginBottom: 2,
        marginTop: 10,
    },
    containTxtMessagesBetween: {
        ...containTxt,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
        marginBottom: 2,
    },
    image: {
        width: SIZE_IMAGE,
        height: SIZE_IMAGE,
        borderRadius: SIZE_IMAGE / 2,
        marginLeft: 10,
    },
    containMessage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtMessage: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
