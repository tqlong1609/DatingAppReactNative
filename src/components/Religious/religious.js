import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Const from '/src/const'

// const ItemsReligious = React.memo((props) => {
//     const { item, onPressItem } = props;
//     const { id, name, isClick } = item;
//     console.log("id", id)
//     return (
//         <TouchableOpacity style={[styles.containerReligious, isClick ? { backgroundColor: 'red' } : null]} onPress={() => onPressItem(item)}>
//             <Text style={styles.txtReligious}>{name}</Text>
//         </TouchableOpacity>
//     )
// });

class ItemsReligious extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: null
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ItemsReligious -> shouldComponentUpdate -> nextState", nextState)
        // console.log("ItemsReligious -> shouldComponentUpdate -> nextProps", nextProps)
        // if(nextProps.item.isClick !== nextState.ite)

        return true;
    }

    render() {
        const { item, onPressItem } = this.props;
        const { id, name, isClick } = item;
        return (
            <TouchableOpacity style={[styles.containerReligious, isClick ? { backgroundColor: 'red' } : null]} onPress={() => onPressItem(item)}>
                <Text style={styles.txtReligious}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

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
    let idPrevious = null;
    const onPressItem = (item) => {
        const dataTemp = [...data];
        const objIndex = dataTemp.findIndex(({ id }) => id === item.id)
        dataTemp[objIndex].isClick = true;
        if (idPrevious !== null) {
            dataTemp[idPrevious].isClick = false;
        }
        idPrevious = objIndex;
        setData(dataTemp);
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
                <Text style={styles.txtTitle}>My Virtues</Text>
                <Text style={styles.txtTitle2}>Religious Beliefs</Text>
                <FlatList
                    style={styles.listReligious}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
            <ButtonNext isGradient={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerReligious: {
        paddingVertical: 10
    },
    txtReligious: {
        fontSize: 20,
        color: 'gray'
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
