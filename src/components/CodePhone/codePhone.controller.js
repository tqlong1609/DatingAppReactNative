import React, { useState } from 'react'
import CodePhone from './codePhone'
import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
import auth from '@react-native-firebase/auth';

export default function CodePhoneController() {

    const [confirm, setConfirm] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null)

    function signInWithPhoneNumber(phoneNumber) {
        auth()
            .signInWithPhoneNumber(phoneNumber)
            .then(confirmResult => setConfirm(confirmResult))
            .catch(error => console.log(error))
        // setConfirm(confirmation);
    }

    function confirmCode(code) {
        // try {
        // if (!isSuccess && confirm !== null) {
        console.log('confirmCode')
        confirm.confirm(code)
            .then(
                user => console.log("user", user)
            )
            .catch(
                error => console.log("error", error)
            )
        // setIsSuccess(true)
        // }
        // } catch (error) {
        //     console.log("confirmCode -> error", error)
        // setIsSuccess(false)
        // }
    }

    const getCode = (code) => {
        console.log("getCode -> code", code)
        confirmCode(code)
    }

    if (!confirm) {
        return (
            <CodePhone onSendCodePhone={signInWithPhoneNumber} />
        );
    }
    return (
        <ConfirmCodePhone getCode={getCode} isSuccess={isSuccess} />
    );
}
