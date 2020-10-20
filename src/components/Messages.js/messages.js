import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text, TextInput } from 'react-native'
import HeaderApp from '/src/components/UI/headerApp'
import ButtonSend from '/src/components/UI/buttonSend'
import { FloatingAction } from "react-native-floating-action";
import Themes from '/src/themes'
const data = [
]

const actions = [
    {
        text: "Accessibility",
        icon: require("/src/assets/images/my_avatar.jpg"),
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Language",
        icon: require("/src/assets/images/my_avatar.jpg"),
        name: "bt_language",
        position: 1
    },
    {
        text: "Location",
        icon: require("/src/assets/images/my_avatar.jpg"),
        name: "bt_room",
        position: 3
    },
    {
        text: "Video",
        icon: require("/src/assets/images/my_avatar.jpg"),
        name: "bt_videocam",
        position: 4
    }
];

export default function messages() {
    const [newValue, setNewValue] = useState('')
    const [height, setHeight] = useState(50)
    const renderItemChat = (item, index) => {
        console.log('object')
        return <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
            <Text>{item.value}</Text></View>
    }

    const updateSize = (height) => {
        setHeight(height)
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderApp />
            <FlatList style={{ flex: 1 }}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => renderItemChat(item, index)} />
            <FloatingAction
                margin={0}
                listenKeyboard={true}
                buttonSize={Themes.Const.SIZE_ICON_MESSAGES}
                position={"left"}
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
            />
            <View style={[styles.containerFooter, { height: height }]}>

                <TextInput
                    placeholder="New message"
                    onChangeText={(value) => setNewValue(value)}
                    style={[styles.inpMessage, {
                        height: height,
                    }]}
                    editable={true}
                    multiline={true}
                    value={newValue}
                    onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                />
                <ButtonSend />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 10,
    },
    inpMessage: {
        borderWidth: 1, borderRadius: 20, borderColor: 'gray',
        paddingHorizontal: 15,
        marginHorizontal: 10,
        width: '80%'
    }
})
