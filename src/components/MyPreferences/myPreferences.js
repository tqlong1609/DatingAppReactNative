import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HeaderSave from '/src/components/UI/headerSave'
import CardDropDown from './subComponents/cardDropDown'
import CardClick from './subComponents/cardClick'
import CardSlider from './subComponents/cardSlider'

const GENDER_ARRAY = [
    {
        label: 'Male', value: 'Male', icon: () =>
            <Ionicons
                name="male-outline" size={18} color={Themes.Colors.PINK_DARK} />
    },
    {
        label: 'Female', value: 'Female', icon: () =>
            <Ionicons name="female-outline" size={18} color={Themes.Colors.PINK_DARK} />
    },
]

export default function MyPreferences() {

    const onSlideAge = (arrange) => {
        console.log("onSlide -> arrange", arrange)
    }

    return (
        <ScrollView style={styles.container}>
            <HeaderSave />
            <Text style={styles.txtHeader}>My Preferences</Text>
            <CardClick content={"Ho Chi Minh City, VietNam"}
                title={"My current location"}
            />
            <CardDropDown data={GENDER_ARRAY} />
            <CardSlider
                content={"Height"}
                textSwitchLeft={"ft"}
                textSwitchRight={"cm"}
                valueStart={3}
                valueEnd={5}
                minValue={1}
                maxValue={10}
                isSwitch={true}
            />
            <CardSlider
                content={"Age"}
                isSwitch={false}
                onSlide={onSlideAge}
                valueStart={18}
                valueEnd={21}
                minValue={18}
                maxValue={44}
            />
            <CardSlider
                content={"Distance"}
                textSwitchLeft={"km"}
                textSwitchRight={"mi"}
                valueStart={10}
                valueEnd={20}
                minValue={0}
                maxValue={100}
                isSwitch={true}
            />
            <CardClick content={"Hetero"}
                title={"Sex Orientation"}
            />
        </ScrollView>
    )
}



const FONT_SIZE = 18
const styles = StyleSheet.create({
    txtHeader: {
        fontSize: FONT_SIZE + 2,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: Themes.Colors.GRAY_BRIGHT_IV
    },
})
