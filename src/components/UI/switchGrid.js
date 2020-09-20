import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import { duration } from 'moment';

const WIDTH_SWITCH = 150
//TODO: switch 
export default function switchGrid() {
    const [valueTransRight, setValueTransRight] = useState(new Animated.Value(0))
    const [valueTransLeft, setValueTransLeft] = useState(new Animated.Value(0))
    const [isRight, setIsRight] = useState(false)
    const onSwitch = () => {
        console.log('object')
        // if (!isRight) {
        //     setIsRight(true)
        //     // isRight ? setIsRight(true) : setIsRight(false)
        Animated.timing(valueTransLeft, {
            toValue: WIDTH_SWITCH / 2,
            duration: 100,
            easing: Easing.linear
        }).start()
        // } else {
        //     console.log('object')
        //     setIsRight(false)
        //     Animated.timing(valueTransLeft, {
        //         toValue: 0,
        //         duration: 100,
        //         easing: Easing.linear
        //     }).start()
        // }
    }

    //     valueTrans.interpolate({
    //         inputRange: [0, 1],
    //         outputRange: [0, WIDTH_SWITCH / 2]
    //     })
    // } else {
    //     console.log('object')
    // valueTrans.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [WIDTH_SWITCH / 2, 0]
    // })
    // }
    return (
        <View
            style={
                {
                    flexDirection: 'row', width: WIDTH_SWITCH, height: 50,
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 30,
                    borderColor: Themes.Colors.GRAY_BRIGHT_I
                }
            }>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Ionicons
                    onPress={() => onSwitch()}
                    name="square"
                    color={Themes.Colors.GRAY_BRIGHT_II}
                    size={25}
                    style={{ alignSelf: 'center' }}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Ionicons
                    onPress={() => onSwitch()}
                    name="grid"
                    color={Themes.Colors.GRAY_BRIGHT_II}
                    size={25}
                    style={{ alignSelf: 'center' }}
                />
            </View>
            <Animated.View
                onStartShouldSetResponder={() => true}
                onResponderGrant={() => onSwitch()}
                style={{
                    width: WIDTH_SWITCH / 2 - 2, height: 47.5
                    , borderRadius: 30
                    , marginLeft: valueTransLeft,
                    position: 'absolute',
                    zIndex: -1
                }}>

                <LinearGradient
                    style={{
                        width: '100%', height: '100%'
                        , borderRadius: 30
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Themes.Colors.PINK_DARK, Themes.Colors.ORANGE_DARK]}
                >
                </LinearGradient>
            </Animated.View>


        </View>
    )
}

const styles = StyleSheet.create({
    btnSwitch: {
        width: 150 / 2 - 2, height: 47.5
        , borderRadius: 30,
        // position: 'absolute',
        // zIndex: -1
    }
})
