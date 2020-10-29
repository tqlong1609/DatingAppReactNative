import React from 'react'
import SignUpEmail from './signUpEmail'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import Api from '/src/api'

export default function SignUpEmailController() {
    const navigation = useNavigation()
    const onSignUpEmail = (params) => {
        const { name, email, password } = params
        requestPostSignUpApi(name, email, email, password)
    }

    const onSignUpPhone = () => {
        navigation.navigate(Const.NameScreens.SignUpPhone)
    }

    const requestPostSignUpApi = async (name, email, confirmEmail, password) => {
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
            .then((json) => console.log(json))
            .catch((error) => console.error(error));
    }

    return (
        <SignUpEmail
            onSignUpEmail={onSignUpEmail}
            onSignUpPhone={onSignUpPhone}
        />
    )
}
