import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTranslation } from 'react-i18next';
import AlertModal from '/src/components/Model/alertModal'
import PassMeter from "react-native-passmeter";
import Ionicons from 'react-native-vector-icons/Ionicons'
const MAX_LEN = 40,
    MIN_LEN = 6,
    PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

import Themes from '/src/themes'
import Utils from '/src/utils'
import { MiddlewareArray } from '@reduxjs/toolkit';
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
    const { t, isLoading, onSignUpEmail, onSignUpPhone, isShowModalSuccess, isShowModalFail,
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

    const onPressSignUpPhone = () => {
        onSignUpPhone && onSignUpPhone()
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

    // check password > normal
    // const onStrongPass = () => {
    // }

    if (password !== "") {
        const checkPass = Utils.ValidateInput.validatePassword(password, MIN_LEN)
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
            <Spinner
                visible={isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
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
                    maxLength={MAX_LEN}
                    placeholder={t('Password')}
                    secureTextEntry
                    onSubmitEditing={() => onPressSignUp()}
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
                maxLength={MAX_LEN}
                minLength={MIN_LEN}
                labels={PASS_LABELS}
            />

            <TouchableOpacity
                disabled={isVisible}
                style={[styles.btnSignUpEmail, !isVisible ? { backgroundColor: Themes.Colors.PINK } : { backgroundColor: 'gray' }]}
                onPress={() => onPressSignUp()}
            >
                <Text style={styles.txtSignUpEmail}>{t('Sign Up')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            <TouchableOpacity style={styles.btnSignUpPhone}
                onPress={() => onPressSignUpPhone()}
            >
                <Text style={styles.txtPhone}>{t('Sign up with phone number')}</Text>
            </TouchableOpacity>
            <AlertModal visible={isShowModalSuccess}
                urlImage={require('/src/assets/images/success.png')}
                title={"Successful"}
                detail={message}
                textButton={"OK"}
                colorButton={"#3AB54A"}
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
    spinnerTextStyle: {
        color: '#FFF'
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
