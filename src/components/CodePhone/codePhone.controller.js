import React, { useState } from 'react'
import CodePhone from './codePhone'
import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
import { Button, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function CodePhoneController() {

    const [confirm, setConfirm] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null)

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode(code) {
        try {
            await confirm.confirm(code);
            setIsSuccess(true)
        } catch (error) {
            setIsSuccess(false)
        }
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
