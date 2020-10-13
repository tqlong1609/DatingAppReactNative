import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiLanguages from './multiLanguages'
import { changeLanguage } from '/src/translations'

export default function MultiLanguagesController() {

    const onPressCountry = (item) => {
        changeLanguage(item.code)
    }
    return (
        <MultiLanguages onPressCountry={onPressCountry} />
    )
}

const styles = StyleSheet.create({})
