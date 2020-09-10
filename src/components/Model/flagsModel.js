import React, { useMemo, useCallback, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Modal from 'react-native-modal';
import Const from '/src/const';

function ItemFlags(props) {
    const { item } = props;
    const { dialCode, label } = item;

    return (
        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, height: 50 }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={{ marginLeft: 10, color: 'black', fontSize: 17 }}>{label}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 17 }}>{dialCode}</Text>
            </View>
        </View>
    )

}

export default function FlagsModel(props) {
    const { isVisible, setVisibleModel } = props;
    const renderItem = useCallback(({ item }) => <ItemFlags item={item} />, [])

    const keyExtractor = useCallback((item) => item.key, [])

    return (
        <Modal
            propagateSwipe={true}
            deviceWidth={Const.Common.deviceWidth}
            deviceHeight={Const.Common.deviceHeight}
            isVisible={isVisible}
        // onSwipeComplete={() => setVisibleModel(false)}
        // swipeDirection="down"
        >
            <View style={styles.container}>

                <FlatList
                    // style={styles.container}
                    data={Const.PhoneAreas.PHONE_AREAS}
                    renderItem={renderItem}
                    scrollEnabled={true}
                    keyExtractor={keyExtractor}
                />
            </View>

            <TouchableOpacity
                onPress={() => setVisibleModel(false)
                }
                style={{
                    marginHorizontal: 20, backgroundColor: 'white',
                    justifyContent: 'center', height: 50,
                    marginTop: 10,
                    borderRadius: 5
                }}
            >
                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'gray' }}>Cancel</Text>
            </TouchableOpacity>
        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 5
    }
})
