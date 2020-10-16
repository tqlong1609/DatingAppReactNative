import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Card from '/src/components/UI/card'

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from '/src/components/UI/CustomLabel'
import CustomMarker from '/src/components/UI/CustomMarker'

export default function MyPreferences() {

    const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
    const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = React.useState([0, 100]);

    sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

    multiSliderValuesChange = values => setMultiSliderValue(values);

    nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <Text style={styles.txtHeader}>My Preferences</Text>
            <Card content={"My current location"}>
                <Text style={styles.txtContent}>Ho Chi Minh City, VietNam</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
            <Card content={"Gender"}>
                <Text style={styles.txtContent}>Male</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
            <Card content={"Height"}>
                <MultiSlider
                    values={[
                        nonCollidingMultiSliderValue[0],
                        nonCollidingMultiSliderValue[1],
                    ]}
                    sliderLength={350}
                    onValuesChange={nonCollidingMultiSliderValuesChange}
                    min={0}
                    max={100}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                    selectedStyle={{
                        backgroundColor: Themes.Colors.PINK,
                    }}
                    customMarker={CustomMarker}
                    customLabel={CustomLabel}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: 18,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    txtHeader: {
        fontSize: 20,
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
