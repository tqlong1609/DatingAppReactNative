import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '/src/components/UI/card'
import DropDownPicker from 'react-native-dropdown-picker';
import Const from '/src/const'
import Themes from '/src/themes'

export default function cardDropDown(props) {
    const { content, data, onChangeGender, itemDefault } = props
    const [item, setItem] = useState()
    const [isScale, setIsScale] = useState(false)

    const onChangeItemDropDown = (item) => {
        setItem(item.value)
        onChangeGender && onChangeGender(item.value)
    }

    const onPressDropDown = () => {
        setIsScale(!isScale)
    }

    return (
        <Card content={content}
            style={isScale ? styles.cardGenderScale : styles.cardGenderDefault}
            styleContent={isScale ? styles.dropDownGender : {
                alignItems: 'flex-start'
            }}
        >
            <DropDownPicker
                items={data}
                defaultValue={itemDefault}
                labelStyle={{
                    fontFamily: Themes.FontFamily.FontMediumDefault, color: Themes.Colors.GRAY_BRIGHT_I,
                    paddingLeft: 5
                }}
                containerStyle={{ height: 40 }}
                style={{
                    backgroundColor: '#fafafa', width: Const.Common.deviceWidth - 50,
                }}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{
                    backgroundColor: '#fafafa',
                }}
                onOpen={() => onPressDropDown()}
                onClose={() => onPressDropDown()}
                onChangeItem={item => onChangeItemDropDown(item)}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardGenderScale: {
        height: 180,
    },
    cardGenderDefault: {
        height: 180 - 75
    },
    dropDownGender: {
        flex: 3,
        alignItems: 'flex-start',
    },

})
