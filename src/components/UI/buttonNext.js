import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Themes from '/src/themes'

//https://simplelineicons.github.io/
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

{/* <ion-icon name=""></ion-icon> */ }
import PropTypes from 'prop-types'
export default function buttonNext(props) {
    const { isGradient, isCheck } = props;
    console.log(isCheck)
    const onClickNext = () => {
        console.log('hello')
    }
    return (
        isGradient ?
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[Themes.Colors.PINK_DARK, Themes.Colors.RED_DARK]}
                style={styles.btnArrowRight}>
                <TouchableOpacity style={styles.btnNext} onPress={() => onClickNext()}>
                    {
                        !isCheck ?
                            <SimpleLineIcons name="arrow-right" size={Themes.Const.SIZE_ICON} color={'white'} style={styles.iconNext} />
                            :
                            <Ionicons name="checkmark-outline" size={Themes.Const.SIZE_ICON + 5} color={'white'} style={styles.iconNext} />
                    }
                </TouchableOpacity>
            </LinearGradient>
            :
            <TouchableOpacity style={styles.btnArrowRight} onPress={() => onClickNext()}>
                <SimpleLineIcons name="arrow-right" size={Themes.Const.SIZE_ICON} color={'white'} style={styles.iconNext} />
            </TouchableOpacity>
    )
}

buttonNext.propTypes = {
    isGradient: PropTypes.bool,
    isCheck: PropTypes.bool,
}

buttonNext.defaultProps = {
    isGradient: false,
    isCheck: false
}


const styles = StyleSheet.create({
    btnNext: {
        width: Themes.Const.BUTTON_NEXT,
        height: Themes.Const.BUTTON_NEXT,
        borderRadius: Themes.Const.BUTTON_NEXT / 2,
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
