import React, { useState } from 'react'
import CodePhone from './codePhone'
import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
import auth from '@react-native-firebase/auth';
import Utils from '/src/utils'
import { Alert } from 'react-native';

export default function CodePhoneController() {

    const [confirm, setConfirm] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null)

    function signInWithPhoneNumber(phoneNumber) {
        const isPhone = Utils.ValidateInput.validatePhoneNumber(phoneNumber)
        if (isPhone) {
            auth()
                .signInWithPhoneNumber(phoneNumber)
                .then(confirmResult => setConfirm(confirmResult))
                .catch(error => console.log(error))
        }
        else {
            Alert.alert("Incorrect format phone number!!")
        }
    }

    //TODO: error
    function confirmCode(code) {
        console.log('confirmCode')
        confirm.confirm(code)
            .then(
                // user => console.log("user", user)
                console.log('success')
            )
            .catch(
                error => console.log("error", error)
            )
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
