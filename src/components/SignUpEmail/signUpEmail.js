import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { withTranslation } from 'react-i18next';
import AlertModal from '/src/components/Model/alertModal'
import PassMeter from "react-native-passmeter";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Const from '/src/const'
import Themes from '/src/themes'
import Utils from '/src/utils'
import SpinnerLoading from '/src/components/UI/spinnerLoading'

/**
 * UNIT TEST
 * not input data : Finish
 * not enter name : Finish
 * not enter email address : Finish
 * not enter confirm email : Finish
 * not enter password : Finish
 * incorrect email format : Finish
 * check password strong : Finish
 * 
 */
function SignUpEmail(props) {
    const { t, isLoading, onSignUpEmail, isShowModalSuccess, isShowModalFail,
        onPressButtonModal,
        onPressBack,
        message } = props;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const refEmail = useRef()
    const refConfirmEmail = useRef()
    const refPassword = useRef()

    let isVisible = true
    let emailCheck = false
    let nameCheck = false
    let confirmEmailCheck = false
    let strongPassCheck = false

    const onPressSignUp = () => {
        onSignUpEmail && onSignUpEmail({ name, email, confirmEmail, password })
    }

    const onBack = () => {
        onPressBack && onPressBack()
    }

    // check name input
    if (name !== "") {
        nameCheck = true
    }

    // check email input
    if (email !== "") {
        const emailValid = Utils.ValidateInput.validateEmail(email)
        if (emailValid) {
            emailCheck = true
        }
    }

    // check confirm email
    if (confirmEmail !== "") {
        if (confirmEmail === email) {
            confirmEmailCheck = true
        }
    }

    // check password strong
    if (password !== "") {
        const checkPass = Utils.ValidateInput.validatePassword(password, Const.Common.MIN_LEN_PASSWORD)
        if (checkPass > 1) {
            strongPassCheck = true
        }
    }

    // check no data input
    if (emailCheck && nameCheck && confirmEmailCheck && strongPassCheck) {
        isVisible = !isVisible
    }

    return (
        <ScrollView>
            <SpinnerLoading isLoading={isLoading} />
            <TouchableOpacity style={styles.btnIcon}
                onPress={() => onBack()}
            >
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Create new account')} </Text>
            <View
                style={[styles.inpEnter, { marginTop: Themes.Const.MARGIN_TOP_V3 }]}
            >
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={t('Name')}
                    onChangeText={(value) => setName(value)}
                    onSubmitEditing={() => refEmail.current.focus()}
                />
                {nameCheck && <Ionicons name="checkmark-outline"
                    style={styles.icoCheck}></Ionicons>}
            </View>

            <View
                style={[styles.inpEnter]}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={t('Email Address')} keyboardType={'email-address'}
                    onChangeText={(value) => setEmail(value)}
                    ref={refEmail}
                    onSubmitEditing={() => refConfirmEmail.current.focus()}
                />
                {emailCheck && <Ionicons name="checkmark-outline"
                    style={styles.icoCheck}></Ionicons>}
            </View>
            <View
                style={[styles.inpEnter]}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={t('Confirm Email')} keyboardType={'email-address'}
                    onChangeText={(value) => setConfirmEmail(value)}
                    ref={refConfirmEmail}
                    onSubmitEditing={() => refPassword.current.focus()}
                />
                {confirmEmailCheck && <Ionicons name="checkmark-outline"
                    style={styles.icoCheck}></Ionicons>}
            </View>
            <View
                style={[styles.inpEnter]}>
                <TextInput
                    ref={refPassword}
                    style={{ flex: 1 }}
                    maxLength={Const.Common.MAX_LEN_PASSWORD}
                    placeholder={t('Password')}
                    secureTextEntry
                    onSubmitEditing={() => !isVisible && onPressSignUp()}
                    onChangeText={password => setPassword(password)}
                />
                {strongPassCheck && <Ionicons name="checkmark-outline"
                    style={styles.icoCheck}></Ionicons>}
            </View>
            <PassMeter
                maxStrong={1}
                height={2}
                width={270}
                showLabels
                password={password}
                maxLength={Const.Common.MAX_LEN_PASSWORD}
                minLength={Const.Common.MIN_LEN_PASSWORD}
                labels={Const.Common.PASS_LABELS}
            />

            <TouchableOpacity
                disabled={isVisible}
                style={[styles.btnSignUpEmail, !isVisible ? { backgroundColor: Themes.Colors.PINK } : { backgroundColor: 'gray' }]}
                onPress={() => onPressSignUp()}
            >
                <Text style={styles.txtSignUpEmail}>{t('Sign Up')}</Text>
            </TouchableOpacity>
            <AlertModal visible={isShowModalSuccess}
                title={"Successful"}
                detail={message}
                textButton={"OK"}
                colorButton={Themes.Colors.GREEN_BRIGHT_I}
                onPressButton={onPressButtonModal}
            />
            <AlertModal
                visible={isShowModalFail}
                urlImage={require('/src/assets/images/warning.png')}
                title={"Error"}
                detail={message}
                textButton={"Try Again"}
                colorButton={"#FF0000"}
                onPressButton={onPressButtonModal}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icoCheck: {
        fontSize: 25, color: 'green', alignSelf: 'center'
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    avatar: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    inpEnter: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        flexDirection: 'row', justifyContent: 'space-between'
    },
    btnSignUpEmail: {
        ...Themes.Styles.Button,
        // backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    txtSignUpEmail: {
        ...Themes.Styles.TextButton,
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSignUpPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    }
})

export default withTranslation()(SignUpEmail)
