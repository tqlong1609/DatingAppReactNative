import React from 'react'
import { StyleSheet, Image, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types';

export default function textInputPhone(props) {
    const { style } = props;
    return (
        <View style={{ ...styles.inpEnterPhone, ...style }}  >
            <Image style={styles.imgFlags} source={require('/src/assets/images/united-states-of-america-flag-medium.png')}
            />
            <TextInput placeholder={'Phone Number'} keyboardType={'phone-pad'} style={styles.inpPhone} />
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
    imgFlags: {
        width: 30,
        height: Themes.Const.HEIGHT - 10,
        marginLeft: 5,
        borderTopLeftRadius: Themes.Const.BORDER_RADIUS,
        borderBottomLeftRadius: Themes.Const.BORDER_RADIUS,
        flex: 1,
        alignSelf: 'center'
    },

})
