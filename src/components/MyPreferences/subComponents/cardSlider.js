import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '/src/components/UI/card'
import CustomHeader from '/src/components/UI/customHeader'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Themes from '/src/themes'
import CustomMarker from '/src/components/UI/CustomMarker'
import Const from '/src/const'

export default function cardSlider(props) {
    const { content, textSwitchLeft, textSwitchRight, textLeft, isSwitch } = props
    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = useState([0, 100]);

    nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);
    return (
        <Card
            content={content}
            styleContent={styles.containSlider}
            customHeader={<CustomHeader
                textSwitchLeft={textSwitchLeft}
                textSwitchRight={textSwitchRight}
                textLeft={textLeft}
                textRight={"5'0''"}
                isSwitch={isSwitch}
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
    )
}

const styles = StyleSheet.create({
    containSlider: {
        alignSelf: 'center'
    },
})
