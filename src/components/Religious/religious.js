import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Const from '/src/const'
import PreferNotSay from '/src/components/UI/preferNotSay'

//TODO: lổi click chọn 2 lần trên flatlist
const ItemsReligious = (props) => {
    const { item, onPressItem } = props;
    const { id, name, isClick } = item;
    console.log("id", id)
    return (
        <TouchableOpacity style={styles.containerReligious} onPress={() => onPressItem(item)}>
            <Text style={[
                styles.txtReligious,
                isClick ? { color: Themes.Colors.PINK_DARK } : { color: 'gray' }
            ]}>
                {name}
            </Text>
            {isClick && <Ionicons name="checkmark-outline" style={styles.icoCheck} />}
        </TouchableOpacity>
    )
};

// class ItemsReligious extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             item: null
//         }
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         // console.log("ItemsReligious -> shouldComponentUpdate -> nextState", nextState)
//         // console.log("ItemsReligious -> shouldComponentUpdate -> nextProps", nextProps)
//         // if(nextProps.item.isClick !== nextState.ite)
//         if (nextProps.item !== this.state.item) {
//             console.log("ItemsReligious -> shouldComponentUpdate -> this.state.item", this.state.item)
//             console.log("ItemsReligious -> shouldComponentUpdate -> nextProps.item", nextProps.item)
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.item !== prevState.item) {
//             // console.log("ItemsReligious -> getDerivedStateFromProps -> prevState.item", prevState.item.isClick)
//             // console.log("ItemsReligious -> getDerivedStateFromProps -> nextProps.item", nextProps.item.isClick)
//             return { item: nextProps.item };
//         }
//         else return null;
//     }

//     render() {
//         const { item, onPressItem } = this.props;
//         const { id, name, isClick } = item;
//         console.log("ItemsReligious -> render -> id", id)
//         return (
//             <TouchableOpacity style={[styles.containerReligious, isClick ? { backgroundColor: 'red' } : null]} onPress={() => onPressItem(item)}>
//                 <Text style={styles.txtReligious}>{name}</Text>
//             </TouchableOpacity>
//         )
//     }
// }

let idPrevious = null;
let isChoose = false;
export default function religious() {

    const renderItem = useCallback(({ item }) =>
        <ItemsReligious
            item={item}
            onPressItem={onPressItem}
        />, [])

    const keyExtractor = useCallback((item) => item.id.toString(), [])

    const [data, setData] = useState(() => {
        let arrTemp = [];
        const dataTemp = Const.Religious.dataReligious;
        dataTemp.forEach(element => {
            const dt = { ...element, isClick: false };
            arrTemp.push(dt)
        });
        return arrTemp;
    })

    const [isReset, setIsReset] = useState(false)

    const onPressItem = (item) => {
        const dataTemp = [...data];
        const objIndex = dataTemp.findIndex(({ id }) => id === item.id)
        dataTemp[objIndex].isClick = true;
        if (idPrevious !== null) {
            dataTemp[idPrevious].isClick = false;
        }
        idPrevious = objIndex;
        setData(dataTemp);
        setIsReset(true)
        isChoose = true;
    }

    const onCheckPrefer = (isCheck) => {
        if (isCheck) {
            if (idPrevious !== null) {
                const dataTemp = [...data];
                dataTemp[idPrevious].isClick = false;
                setData(dataTemp);
                isChoose = true
            }
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
                <Text style={styles.txtTitle2}>Religious Beliefs</Text>
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

const styles = StyleSheet.create({
    icoCheck: {
        color: Themes.Colors.PINK_DARK,
        fontSize: 30
    },
    containerReligious: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtReligious: {
        fontSize: 20,

    },
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
