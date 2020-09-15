import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Themes from '/src/themes'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import PropTypes from 'prop-types'
export default function buttonNext(props) {
    const { isGradient } = props;
    const onClickNext = () => {
        console.log('hello')
    }
    return (
        isGradient ?
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[Themes.Colors.PINK_DARK, '#B33811']}
                style={styles.btnArrowRight}>
                <TouchableOpacity style={styles.btnNext} onPress={() => onClickNext()}>
                    <SimpleLineIcons name="arrow-right" size={25} color={'white'} style={styles.iconNext} />
                </TouchableOpacity>
            </LinearGradient>
            :
            <TouchableOpacity style={styles.btnArrowRight} onPress={() => onClickNext()}>
                <SimpleLineIcons name="arrow-right" size={25} color={'white'} style={styles.iconNext} />
            </TouchableOpacity>
    )
}

buttonNext.propsTypes = {
    isGradient: PropTypes.bool,
}

buttonNext.defaultProps = {
    isGradient: false
}

const BUTTON_NEXT = 45;

const styles = StyleSheet.create({
    btnNext: {
        width: BUTTON_NEXT,
        height: BUTTON_NEXT,
        borderRadius: BUTTON_NEXT / 2,
        justifyContent: 'center',
    },
    btnArrowRight: {
        ...Themes.Styles.ButtonBottomNext
    },
    iconNext: {
        alignSelf: 'center',
        marginLeft: 5
    }
})
