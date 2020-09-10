import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types';
import FlagsModel from '/src/components/Model/flagsModel'
export default function textInputPhone(props) {
    const { style } = props;
    const [isVisible, setIsVisible] = useState(false);
    function setVisibleModel(isVisible) {
        setIsVisible(isVisible);
    }
    // const callbackTest = useCallback((isVisible) => { setIsVisible(isVisible) }, [isVisible]);
    return (
        <View style={{ ...styles.inpEnterPhone, ...style }}  >
            <TouchableOpacity onPress={() => setVisibleModel(true)}>
                <Image style={styles.imgFlags} source={require('/src/assets/images/united-states-of-america-flag-medium.png')}
                />
            </TouchableOpacity>
            <TextInput placeholder={'Phone Number'}
                keyboardType={'phone-pad'}
                style={styles.inpPhone} />
            <FlagsModel isVisible={isVisible} setVisibleModel={setVisibleModel} />
        </View>
    )
}

textInputPhone.propTypes = {
    style: PropTypes.object,
}

textInputPhone.defaultProps = {
    style: null
}

const styles = StyleSheet.create({
    inpPhone: {
        flex: 7,
        borderTopRightRadius: Themes.Const.BORDER_RADIUS,
        borderBottomRightRadius: Themes.Const.BORDER_RADIUS,
    },
    inpEnterPhone: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        paddingLeft: 0,
        flexDirection: 'row'
    },
    btnFlags: {
        // paddingVertical: 5,
        // backgroundColor: 'red'
    },
    imgFlags: {
        width: 30,
        height: Themes.Const.HEIGHT - 10,
        margin: 3,
        borderTopLeftRadius: Themes.Const.BORDER_RADIUS,
        borderBottomLeftRadius: Themes.Const.BORDER_RADIUS,
        flex: 1,
        // alignSelf: 'center'
    },

})
