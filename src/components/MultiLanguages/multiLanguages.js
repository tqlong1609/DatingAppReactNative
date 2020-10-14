import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import ItemListCountry from '/src/components/UI/itemListCountry'
import PropTypes from 'prop-types'

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
let isRender = true
function MultiLanguages(props) {
    const { t, onPressCountry, code } = props
    const [indexClick, setIndexClick] = useState(null)
    // const [data, setData] = useState(() => {
    //     let arrTemp = [];
    //     const dataTemp = languageCountry
    //     dataTemp.forEach(element => {
    //         const dt = { ...element, isClick: false };
    //         arrTemp.push(dt)
    //     });
    //     return arrTemp;
    // })

    const onPressItem = (item, index) => {
        onPressCountry && onPressCountry(item)
        setIndexClick(index)
        // const dataTemp = [...languageCountry];
        // const objIndex = dataTemp.findIndex(({ id }) => id === item.id)
        // dataTemp[objIndex].isClick = true;
        // if (idPrevious !== null && idPrevious !== item.id) {
        //     dataTemp[idPrevious].isClick = false;
        // }
        // idPrevious = objIndex;
        // setData(dataTemp);
    }

    const keyExtractor = useCallback(({ id }) => id, [])
    const renderItem = useCallback(({ item, index }) =>
        <ItemListCountry item={item}
            index={index}
            indexClick={indexClick}
            code={code}
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
                data={languageCountry}
                renderItem={({ item, index }) => (
                    <ItemListCountry item={item}
                        index={index}
                        indexClick={indexClick}
                        code={code}
                        onPressItem={onPressItem}
                    />
                )}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

MultiLanguages.propTypes = {
    onPressCountry: PropTypes.func,
    code: PropTypes.string,
}

MultiLanguages.defaultProps = {
    code: null
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