import React, { useState } from 'react'
import Login from './login'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import { LoginManager, AccessToken } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';
import Api from '/src/api'

/**
 * UNIT TEST
 * no input : FInish
 * no input email: FInish
 * no input password : finish
 * TODO: show error when invalid email
 */
export default function LoginController() {
    const navigation = useNavigation()

    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')

    const signUpWithFacebookApi = () => {
        return LoginManager.logInWithPermissions([
            'public_profile',
        ])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(
                    `Login success with permission: ${result.grantedPermissions.toString()}`,
                );
                return AccessToken.getCurrentAccessToken();
            })
            .then((data) => {
                console.log("signUpWithFacebookApi -> data", data)
                // const credential = auth.FacebookAuthProvider.credential(
                //     data.accessToken,
                // );
                // console.log("signUpWithFacebookApi -> credential", credential)
                // return auth().signInWithCredential(credential);
            })
            // .then((response) =>
            //     console.log("signUpWithFacebookApi -> response", response)
            // )
            .catch(error => {
                console.log("error", error)
            });
        // return LoginManager.logInWithPermissions([
        //     'public_profile',
        //     'email',
        //     'user_birthday',
        //     'user_gender',
        //     'user_location',
        //     'user_photos',
        // ]).then(
        //     (result) => {
        //         if (result.isCancelled) {
        //             console.log('Login cancelled');
        //         } else {
        //             AccessToken.getCurrentAccessToken().then((data) => {
        //                 console.log(data);
        //                 // this.getInfoFromFB(data.accessToken);
        //             });
        //         }
        //     },
        //     (error) => {
        //         console.log('Login fail with error: ' + error);
        //     },
        // );
    };

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

    return (
        <Login
            isLoading={isLoading}
            onPressLogin={onPressLogin}
            onPressLoginNumberPhone={onPressLoginNumberPhone}
            onPressLoginFacebookAPI={onPressLoginFacebookAPI}
            isShowModalFail={isShowModalFail}
            message={message}
            onPressButtonModal={onPressButtonModal}
        />
    )
}
