import React, { useState } from 'react'
import Login from './login'
import Const from '/src/const'
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { useDispatch, useSelector } from 'react-redux'
import { pushDataLoginFB, pushDataLoginEmail } from '/src/slice/loginSlice'
import Api from '/src/api'
import jwt_decode from "jwt-decode";
import { saveStorage, saveDataUserStorage } from '/src/configs/AsyncStorage'

/**
 * UNIT TEST
 * no input : FInish
 * no input email: FInish
 * no input password : finish
 */
export default function LoginController(props) {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

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
        const { jwtToken, id } = json
        handleBeforeLogin(jwtToken, id)
        dispatch(pushDataLoginFB(json))
        switchNavigationScreen(json)
    }

    const switchNavigationScreen = (json) => {
        const { email, dateOfBirth, gender, photoUrl } = json
        if (email === null) {
            navigation.navigate(Const.NameScreens.EmailAddress)
        }
        else if (dateOfBirth === null) {
            navigation.navigate(Const.NameScreens.Birthday)
        }
        else if (gender === null) {
            navigation.navigate(Const.NameScreens.Gender)
        }
        else if (photoUrl === null) {
            navigation.navigate(Const.NameScreens.Picture)
        }
        else {
            navigation.navigate(Const.NameScreens.BottomNavigation)
        }
    }

    const handleBeforeLogin = (jwtToken, id) => {
        const dataToken = jwt_decode(jwtToken)
        saveDataUserStorage(Const.StorageKey.CODE_LOGIN_TOKEN, [jwtToken, id, dataToken.exp])
    }

    const requestApiSuccess = (json) => {
        if (json.status === "Active") {
            const { jwtToken, id } = json
            handleBeforeLogin(jwtToken, id)
            dispatch(pushDataLoginEmail(json))
            switchNavigationScreen(json)
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
        // loginSuccessWithEmail(email)
        // navigation.navigate(Const.NameScreens.BottomNavigation)

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
        navigation.goBack()
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
