import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Card from '/src/components/UI/card'
import CustomHeader from '/src/components/UI/customHeader'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '/src/components/UI/CustomMarker'

import Const from '/src/const'

export default function MyPreferences() {

    const [sliderOneChanging, setSliderOneChanging] = useState(false);
    const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = useState([0, 100]);

    sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

    multiSliderValuesChange = values => setMultiSliderValue(values);

    nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnIcon}>
                    <Ionicons name="arrow-back-outline"
                        color={Themes.Colors.PINK_DARK}
                        size={Themes.Const.SIZE_ICON} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containSave}>
                    <Text style={styles.txtSave}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtHeader}>My Preferences</Text>
            <Card content={"My current location"}>
                <Text style={styles.txtContent}>Ho Chi Minh City, VietNam</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
            <Card content={"Gender"}>
                <Text style={styles.txtContent}>Male</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
            <Card
                content={"Height"}
                styleContent={styles.containSlider}
                customHeader={<CustomHeader
                    textSwitchLeft={"ft"}
                    textSwitchRight={"cm"}
                    textLeft={"3'0''"}
                    textRight={"5'0''"}
                    isSwitch={true}
                />}
            >
                <MultiSlider
                    values={[
                        nonCollidingMultiSliderValue[0],
                        nonCollidingMultiSliderValue[1],
                    ]}
                    sliderLength={Const.Common.deviceWidth - 70}
                    // onValuesChange={nonCollidingMultiSliderValuesChange}
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
                />
            </Card>
            <Card
                content={"Age"}
                styleContent={styles.containSlider}
                customHeader={<CustomHeader
                    textSwitchLeft={"ft"}
                    textSwitchRight={"cm"}
                    textLeft={"18"}
                    textRight={"44"}
                />}
            >
                <MultiSlider
                    values={[
                        nonCollidingMultiSliderValue[0],
                        nonCollidingMultiSliderValue[1],
                    ]}
                    sliderLength={Const.Common.deviceWidth - 70}
                    // onValuesChange={nonCollidingMultiSliderValuesChange}
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
                />
            </Card>
            <Card
                content={"Distance"}
                styleContent={styles.containSlider}
                customHeader={<CustomHeader
                    textSwitchLeft={"km"}
                    textSwitchRight={"mi"}
                    textLeft={"0"}
                    textRight={"100"}
                    isSwitch={true}
                />}
            >
                <MultiSlider
                    values={[
                        nonCollidingMultiSliderValue[0],
                        nonCollidingMultiSliderValue[1],
                    ]}
                    sliderLength={Const.Common.deviceWidth - 70}
                    // onValuesChange={nonCollidingMultiSliderValuesChange}
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
                />
            </Card>
            <Card content={"Sex Orientation"}>
                <Text style={styles.txtContent}>Hetero</Text>
                <Ionicons name="caret-forward-outline" size={15} color={Themes.Colors.GRAY_BRIGHT_I} />
            </Card>
        </ScrollView>
    )
}



const FONT_SIZE = 18
const styles = StyleSheet.create({
    txtSave: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Themes.Colors.PINK_DARK
    },
    containSave: {
        justifyContent: 'center',
        paddingRight: 17
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
