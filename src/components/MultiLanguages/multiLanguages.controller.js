import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MultiLanguages from './multiLanguages'
import { changeLanguage } from '/src/translations'
import { readStorage, saveStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'

export default function MultiLanguagesController() {
    const [code, setCode] = useState(null)
    const onPressCountry = (item) => {
        saveStorage(Const.StorageKey.CODE_LANGUAGES, item.code)
        changeLanguage(item.code)
    }

    useEffect(() => {
        const getCodeFromStorage = async () => {
            const data = await readStorage(Const.StorageKey.CODE_LANGUAGES)
            setCode(data)
        }
        getCodeFromStorage()
    }, [])

    if (code === null) {
        return (<View style={{ alignItems: 'center' }}>
            <Text>Loading</Text>
        </View>)
    }
    else {
        return (
            <MultiLanguages onPressCountry={onPressCountry} code={code} />
        )
    }
}
