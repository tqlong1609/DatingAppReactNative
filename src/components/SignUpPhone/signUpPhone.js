import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons';
import AvatarCircle from 'src/components/UI/avatarCircle.js'
import DropDownPhone from '../UI/dropDownPhone'

//TODO: click show flags
//TODO: pick image of avatar
export default function signUpPhone() {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> Create new account </Text>
            <AvatarCircle style={styles.avatar} />
            <TextInput style={styles.inpEnter} placeholder={'First Name'} />
            <TextInput style={styles.inpEnter} placeholder={'Last Name'} />
            <View style={styles.inpEnterPhone}  >
                {/* <Image style={styles.imgFlags} source={require('/src/assets/images/united-states-of-america-flag-medium.png')}
                /> */}
                <DropDownPhone style={styles.imgFlags} />
                <TextInput placeholder={'Phone Number'} keyboardType={'phone-pad'} style={styles.inpPhone} />
            </View>
            <TouchableOpacity style={styles.btnSendCode}>
                <Text style={styles.txtSendCode}>Send code</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> OR </Text>
            <TouchableOpacity style={styles.btnSignUpEmail}>
                <Text style={styles.txtSignUpEmail}>Sign up with E-mail</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    avatar: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    inpEnter: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSendCode: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    txtSendCode: {
        ...Themes.Styles.TextButton,
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1,
    },
    btnSignUpEmail: {
        ...Themes.Styles.ButtonBottom,
        width: 150,
        marginTop: 0,
    },
    txtSignUpEmail: {
        ...Themes.Styles.TextButtonBottom,
    },
    imgFlags: {
        marginLeft: 20,
        flex: 1,
        alignSelf: 'center'
    },
    inpEnterPhone: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        paddingLeft: 0,
        flexDirection: 'row'
    },
    inpPhone: {
        flex: 7,
        borderTopRightRadius: Themes.Const.BORDER_RADIUS,
        borderBottomRightRadius: Themes.Const.BORDER_RADIUS,
    }

})
