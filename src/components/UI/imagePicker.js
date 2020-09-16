import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'

export default function imagePicker(props) {
    const { onPressAdd } = props;
    const [urlImage, setUrlImage] = useState(null);

    return (
        <View style={styles.containerViewImage}>
            <View style={styles.containerRotate} />
            <View style={styles.containerImage} />
            {
                urlImage !== null ?
                    (<View style={styles.containerImagePicker}>
                        <Image source={require('/src/assets/images/my_avatar.jpg')} resizeMode={'stretch'} style={styles.imgPicker} />
                    </View>)
                    :
                    (<View style={styles.containerPicker}>
                        <TouchableOpacity style={styles.containerIcon} onPress={() => onPressAdd()}>
                            <Icon name="add-outline" size={50} style={styles.icoAdd} />
                        </TouchableOpacity>
                        <Text style={styles.txtAddPhoto}>Add your photo</Text>
                    </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerImagePicker: {
        elevation: 7,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        position: 'absolute', zIndex: 1,
    },
    imgPicker: {
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
    image: {
        backgroundColor: 'red', width: '100%', height: '100%', alignSelf: 'center',
        borderRadius: 10,
    },
    txtAddPhoto: {
        color: '#BDB6BB',
        fontSize: 25,
        alignSelf: 'center'
    },
    icoAdd: {
        color: '#BDB6BB',
        alignSelf: 'center'
    },
    containerIcon: {
        justifyContent: 'center',
        borderWidth: 2.5,
        borderColor: '#BDB6BB',
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    containerPicker: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'space-between',
        elevation: 7,
        position: 'absolute', zIndex: 1,
        marginTop: 160,
    },
    containerImage: {
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        alignSelf: 'center',
    },
    containerViewImage: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        height: 390,
    },
    containerRotate: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
        transform: [{ rotate: "-7deg" }],
    },

})
