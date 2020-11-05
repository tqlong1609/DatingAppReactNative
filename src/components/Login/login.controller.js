import React, { useState } from 'react'
import Login from './login'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { useDispatch } from 'react-redux'
import { pushDataLoginFB } from '/src/slice/loginSlice'
import Api from '/src/api'

/**
 * UNIT TEST
 * no input : FInish
 * no input email: FInish
 * no input password : finish
 */
export default function LoginController() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')

    const signUpWithFacebookApi = () => {
        return LoginManager.logInWithPermissions([
            'public_profile',
            'email',
            'user_birthday',
            'user_gender',
            'user_location',
            'user_photos',
        ]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then((data) => {
                        requestApiLoginFacebook(data)
                    });
                }
            },
            (error) => {
                console.log('Login fail with error: ' + error);
            },
        );
    };

    const requestApiLoginFacebook = (data) => {
        const { accessToken, userID } = data
        setIsLoading(true)
        Api.RequestApi.postRequestApi(Api.Url.URL_SIGN_IN_FACEBOOK, {
            facebookUserId: userID,
            facebookToken: accessToken
        })
            .then((response) => response.json())
            .then((json) => requestApiFacebookSuccess(json))
            .catch((error) => requestApiFacebookFail(error))
            .finally(() => setIsLoading(false));
    }

    const requestApiFacebookFail = (error) => {
        console.log("requestApiFacebookFail -> error", error)
    }

    /**
     * email, birthday, gender, picture, religious, work,
     *  job, education, politics, hight level .., ethnicity, kids, family plan, 
     */
    const requestApiFacebookSuccess = (json) => {
        const action = pushDataLoginFB(json)
        dispatch(action)

    }

    const requestApiSuccess = (json) => {
        console.log("requestApiSuccess -> json", json)
        if (json.status === "Active") {
            navigation.navigate(Const.NameScreens.EmailAddress)
        } else {
            setIsShowModalFail(true)
            json.errors !== undefined ? setMessage(json.errors.email[0]) : setMessage(json.message)
        }
    }

    const requestApiFail = (error) => {
        console.log("requestApiFail", error)
        setIsShowModalFail(true)
        setMessage("Network connect fail")
    }

    const onPressLogin = (email, password) => {
        setIsLoading(true)
        Api.RequestApi.postRequestApi(Api.Url.URL_SIGN_IN_EMAIL, {
            email: email.toLowerCase(),
            password: password
        })
            .then((response) => response.json())
            .then((json) => requestApiSuccess(json))
            .catch((error) => requestApiFail(error))
            .finally(() => setIsLoading(false));
    }

    const onPressLoginNumberPhone = () => {
        navigation.navigate(Const.NameScreens.CodePhone)
    }

    const onPressLoginFacebookAPI = () => {
        signUpWithFacebookApi()
    }

    const onPressButtonModal = () => {
        setIsShowModalFail(false)
    }

    const onBack = () => {
        navigation.navigate(Const.NameScreens.SingInOrUp)
    }

    return (
        <Login
            isLoading={isLoading}
            onPressLogin={onPressLogin}
            onPressLoginNumberPhone={onPressLoginNumberPhone}
            onPressLoginFacebookAPI={onPressLoginFacebookAPI}
            isShowModalFail={isShowModalFail}
            message={message}
            onBack={onBack}
            onPressButtonModal={onPressButtonModal}
        />
    )
}
