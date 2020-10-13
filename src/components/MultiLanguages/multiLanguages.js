import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import ItemListCountry from '/src/components/UI/itemListCountry'

import { withTranslation } from 'react-i18next'

const languageCountry = [
    {
        id: "1",
        country: "Vietnamese",
        code: "vi",
        source: require("/src/assets/images/vietnam.png")
    },
    {
        id: "2",
        country: "English",
        code: "en",
        source: require("/src/assets/images/united-kingdom.png")
    }
]

let idPrevious = null;
function MultiLanguages(props) {
    const { t, onPressCountry } = props
    const [data, setData] = useState(() => {
        let arrTemp = [];
        const dataTemp = languageCountry
        dataTemp.forEach(element => {
            const dt = { ...element, isClick: false };
            arrTemp.push(dt)
        });
        return arrTemp;
    })

    const onPressItem = (item) => {
        onPressCountry(item)
        const dataTemp = [...languageCountry];
        const objIndex = dataTemp.findIndex(({ id }) => id === item.id)
        dataTemp[objIndex].isClick = true;
        if (idPrevious !== null && idPrevious !== item.id) {
            dataTemp[idPrevious].isClick = false;
        }
        idPrevious = objIndex;
        setData(dataTemp);
    }

    const keyExtractor = useCallback(({ id }) => id, [])
    const renderItem = useCallback(({ item }) =>
        <ItemListCountry item={item}
            onPressItem={onPressItem}
        />
        , [])
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons
                    name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <Text style={styles.txtSelect}>{t("Select language")}</Text>
            <FlatList
                style={styles.listCountry}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtSelect: {
        ...Themes.Styles.txtTitle,
        marginLeft: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        marginBottom: Themes.Const.MARGIN_TOP_V1
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    listCountry: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    }
})

export default withTranslation()(MultiLanguages)