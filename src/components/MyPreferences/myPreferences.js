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

    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = useState([0, 100]);

    nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);



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
                textLeft={"3'0''"}
                textRight={"5'0''"}
                isSwitch={true}
            />
            <CardSlider
                content={"Age"}
                textLeft={"18"}
                textRight={"44"}
                isSwitch={false}
            />
            <CardSlider
                content={"Distance"}
                textSwitchLeft={"km"}
                textSwitchRight={"mi"}
                textLeft={"0"}
                textRight={"100"}
                isSwitch={true}
            />
            <CardClick content={"Sex Orientation"}
                title={"Hetero"}
            />
        </ScrollView>
    )
}



const FONT_SIZE = 18
const styles = StyleSheet.create({



    containSave: {
        justifyContent: 'center',
        paddingRight: 17
    },

    containSlider: {
        alignSelf: 'center'
    },
    txtContent: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
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
    btnIcon: {
        ...Themes.Styles.IconBack
    },
})
