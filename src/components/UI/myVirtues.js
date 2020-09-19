import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Const from '/src/const'
import PreferNotSay from '/src/components/UI/preferNotSay'
import ItemList from '/src/components/UI/itemList'
import PropTypes from 'prop-types'

let idPrevious = null;
export default function myVirtues(props) {
    const { title, dataList } = props;

    const renderItem = useCallback(({ item }) =>
        <ItemList
            item={item}
            onPressItem={onPressItem}
        />, [])

    const keyExtractor = useCallback((item) => item.id.toString(), [])

    const [isReset, setIsReset] = useState(false)
    const [isChoose, setIsChoose] = useState(false)
    const [data, setData] = useState(() => {
        let arrTemp = [];
        const dataTemp = dataList
        dataTemp.forEach(element => {
            const dt = { ...element, isClick: false };
            arrTemp.push(dt)
        });
        return arrTemp;
    })


    const onPressItem = (item) => {
        const dataTemp = [...data];
        const objIndex = dataTemp.findIndex(({ id }) => id === item.id)
        dataTemp[objIndex].isClick = true;
        console.log("onPressItem -> dataTemp[objIndex]", dataTemp[objIndex])
        if (idPrevious !== null && idPrevious !== item.id) {
            dataTemp[idPrevious].isClick = false;
        }
        idPrevious = objIndex;
        console.log("onPressItem -> dataTemp", dataTemp)
        setData(dataTemp);
        setIsReset(true) // reset click onCheckPrefer
        setIsChoose(true) // true: buttonNext active
    }

    const onCheckPrefer = (isCheck) => {
        if (isCheck) {
            if (idPrevious !== null) {
                console.log('onCheckPrefer')
                const dataTemp = [...data];
                dataTemp[idPrevious].isClick = false;
                setData(dataTemp);
                setIsChoose(true)
            }
        }
        else {
            setIsChoose(false)
        }
    }

    useEffect(() => {
        if (isReset) {
            setIsReset(false);
        }

    }, [isReset])

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSkip}>
                <Text style={styles.txtSkip}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>My Virtues</Text>
                <Text style={styles.txtTitle2}>{title}</Text>
                <FlatList
                    style={styles.listReligious}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
            <ButtonNext isGradient={!isChoose ? false : true} />
            <PreferNotSay onCheckPrefer={onCheckPrefer} isReset={isReset} />
        </View>
    )
}

myVirtues.propTypes = {
    title: PropTypes.string,
    dataList: PropTypes.array,
}

myVirtues.defaultProps = {
    title: '',
    dataList: null
}

const styles = StyleSheet.create({
    listReligious: {
        height: Themes.Const.SIZE_CONTENT_INSIDE
    },
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
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
