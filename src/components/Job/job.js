import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native'
import PreferNotSay from '/src/components/UI/preferNotSay'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

let isWriting = false;
export default function work() {

    const [isReset, setIsReset] = useState(false)

    const onCheckPrefer = (isCheck) => {

    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSkip}>
                <Text style={styles.txtSkip}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>My virtues</Text>
                <Text style={styles.txtTitle2}>Job</Text>
                <TextInput placeholder={'UI Designer'}
                    style={styles.inpWork}
                    keyboardType={'default'}
                />
                <Text style={styles.txtDetail}>This is how it will appear in datum</Text>
            </View>

            <ButtonNext isGradient={!isWriting ? false : true} />
            <PreferNotSay onCheckPrefer={onCheckPrefer} isReset={isReset} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    inpWork: {
        fontSize: Themes.Const.FONT_SIZE_V3,
        borderBottomWidth: Themes.Const.BORDER_TEXT_INPUT
    },
    txtSkip: {
        fontSize: 20,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    btnSkip: {
        ...Themes.Styles.IconSkip
    }
})