import React, { useState } from 'react'
import SignUpEmail from './signUpEmail'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import Api from '/src/api'

export default function SignUpEmailController() {
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalSuccess, setIsShowModalSuccess] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')
    const navigation = useNavigation()
    const onSignUpEmail = (params) => {
        const { name, email, confirmEmail, password } = params
        requestPostSignUpApi(name, email, confirmEmail, password)
    }

    const onSignUpPhone = () => {
        navigation.navigate(Const.NameScreens.SignUpPhone)
    }

    const requestApiSuccess = (json) => {
        console.log(json)
        if (json.errors === undefined) {
            setIsShowModalSuccess(true)
            setMessage(json.message)
        } else {
            setIsShowModalFail(true)
            setMessage(json.title)
        }

    }

    // network fail
    const requestApiFail = (error) => {
        console.log("requestApiFail", error)
        setIsShowModalFail(true)
        setMessage("Network connect fail")
    }

    const requestPostSignUpApi = async (name, email, confirmEmail, password) => {
        setIsLoading(true)
        Api.RequestApi.postRequestApi(Api.Url.URL_SIGN_UP_EMAIL, {
            email: email.toLowerCase(),
            confirmEmail: confirmEmail,
            password: password,
            name: name,
            gender: "male",
            dateOfBirth: "09/16/1999",
            city: "HCM",
            country: "Vietnam"
        })
            .then((response) => response.json())
            .then((json) => requestApiSuccess(json))
            .catch((error) => requestApiFail(error))
            .finally(() => setIsLoading(false));
    }

    const onPressButtonModal = () => {
        isShowModalSuccess && setIsShowModalSuccess(false)
        isShowModalFail && setIsShowModalFail(false)
    }

    const onPressBack = () => {
        navigation.navigate(Const.NameScreens.SingInOrUp)
    }

    return (
        <SignUpEmail
            onSignUpEmail={onSignUpEmail}
            onSignUpPhone={onSignUpPhone}
            onPressBack={onPressBack}
            isLoading={isLoading}
            isShowModalSuccess={isShowModalSuccess}
            isShowModalFail={isShowModalFail}
            onPressButtonModal={onPressButtonModal}
            message={message}
        />
    )
}
