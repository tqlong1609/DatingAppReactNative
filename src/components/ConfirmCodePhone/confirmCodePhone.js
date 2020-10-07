import React from 'react'
import {
    StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Themes from '/src/themes'
import ConfirmInputPhone from '/src/components/UI/confirmInputPhone'

import PropTypes from 'prop-types'

confirmCodePhone.propTypes = {
    getCode: PropTypes.func,
    isSuccess: PropTypes.bool,
}

confirmCodePhone.defaultProps = {
    getCode: null,
    isSuccess: null
}

export default function confirmCodePhone(props) {

    const { getCode, isSuccess } = props

    const onChangeCode = (value) => {
        getCode && getCode(value)
    }

    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Sign In </Text>
            <View
                style={styles.inpPhone}>
                {

                    isSuccess !== null && isSuccess &&
                    <Text
                        style={styles.txtInfo}>
                        Success</Text>

                }
                {
                    isSuccess !== null && !isSuccess &&
                    <Text
                        style={styles.txtInfo}>
                        Error</Text>
                }
                <ConfirmInputPhone
                    onChangeCode={onChangeCode}
                />
            </View>

            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignInFB}>
                <Text style={styles.txtLoginFB}>Login With Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInPhone}>
                <Text style={styles.txtPhone}>Login with E-mail</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inpPhone: {
        // ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP_V2,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1
    },
    btnSignInFB: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.FACEBOOK,
    },
    txtLoginFB: {
        ...Themes.Styles.TextButton
    },
    btnSignInPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    },
    txtInfo: {
        marginBottom: 10,
        alignSelf: 'center',
        ...Themes.Styles.TextError
    }
})
