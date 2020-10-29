import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
// import AvatarCircle from 'src/components/UI/avatarCircle.js'
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTranslation } from 'react-i18next';
import AlertModal from '/src/components/Model/alertModal'

import Themes from '/src/themes'

//TODO: pick image of avatar
function SignUpEmail(props) {
    const { t, isLoading, onSignUpEmail, onSignUpPhone, isShowModalSuccess, isShowModalFail, onPressButtonModal,
        message } = props;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')

    const refEmail = useRef()
    const refConfirmEmail = useRef()
    const refPassword = useRef()

    const onPressSignUp = () => {
        onSignUpEmail && onSignUpEmail({ name, email, confirmEmail, password })
    }

    const onPressSignUpPhone = () => {
        onSignUpPhone && onSignUpPhone()
    }

    return (
        <ScrollView>
            <Spinner
                visible={isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Create new account')} </Text>
            <TextInput style={styles.inpEnter} placeholder={t('Name')}
                onChangeText={(value) => setName(value)}
                onSubmitEditing={() => refEmail.current.focus()}
            />
            <TextInput style={styles.inpEnter} placeholder={t('Email Address')} keyboardType={'email-address'}
                onChangeText={(value) => setEmail(value)}
                ref={refEmail}
                onSubmitEditing={() => refConfirmEmail.current.focus()}
            />
            <TextInput style={styles.inpEnter} placeholder={t('Confirm Email')} keyboardType={'email-address'}
                onChangeText={(value) => setConfirmEmail(value)}
                ref={refConfirmEmail}
                onSubmitEditing={() => refPassword.current.focus()}
            />
            <TextInput style={styles.inpEnter} placeholder={t('Password')} secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                ref={refPassword}
                onSubmitEditing={() => onPressSignUp()}
            />
            <TouchableOpacity style={styles.btnSignUpEmail}
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
    },
    btnSignUpEmail: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
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
