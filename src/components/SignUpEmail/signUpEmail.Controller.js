import React, { useState } from 'react'
import SignUpEmail from './signUpEmail'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import Api from '/src/api'

export default function SignUpEmailController() {
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)
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
        setIsLoading(false)
        setIsShowModal(true)
    }

    const requestPostSignUpApi = async (name, email, confirmEmail, password) => {
        setIsLoading(true)
        Api.RequestApi.postRequestApi(Api.Url.URL_SIGN_UP_EMAIL, {
            email: email,
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
            .catch((error) => console.error(error));
    }

    const onPressButtonModal = () => {
        setIsShowModal(false)
    }

    return (
        <SignUpEmail
            onSignUpEmail={onSignUpEmail}
            onSignUpPhone={onSignUpPhone}
            isLoading={isLoading}
            isShowModal={isShowModal}
            onPressButtonModal={onPressButtonModal}
        />
    )
}
