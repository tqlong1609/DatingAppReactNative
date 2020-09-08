import React from 'react'
import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
    ? Dimensions.get("window").height
    : ExtraDimensions.get("REAL_WINDOW_HEIGHT");

export default function bottomHalfModel(props) {
    const { isVisible, setVisibleModel } = props;
    return (
        <View >
            <Modal
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                isVisible={isVisible}
                onSwipeComplete={() => setVisibleModel(false)}
                swipeDirection="down"
            // customBackdrop={<View style={{ flex: 1 }} />}
            >
                <View style={styles.container}>
                    <View style={styles.containerContent}>
                        <View style={styles.containerHeader}>
                            <Text style={styles.txtHeader}>Confirm action</Text>
                        </View>
                        <TouchableOpacity style={styles.btnBetweenContent}>
                            <Text style={styles.txtContentButton}>Upload photo from gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnBottomContent}>
                            <Text style={styles.txtContentButton}>Take photo with camera</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => setVisibleModel(false)}
                    >
                        <Text style={styles.txtCancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginLeft: 0,
        flex: 1
    },
    containerContent: {
        height: 200
    },
    containerHeader: {
        height: 200 / 3, backgroundColor: 'white',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        justifyContent: 'center'
    },
    txtHeader: {
        alignSelf: 'center',
        color: '#9C9A99',
        fontSize: 15
    },
    txtContentButton: {
        alignSelf: 'center',
        color: '#3493FB',
        fontWeight: 'bold',
        fontSize: 20
    },
    btnBetweenContent: {
        height: 200 / 3,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderTopColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        justifyContent: 'center'
    },
    btnBottomContent: {
        height: 200 / 3,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    },
    btnCancel: {
        backgroundColor: 'white',
        height: 200 / 3,
        marginTop: 5,
        borderRadius: 10,
        justifyContent: 'center'
    },
    txtCancel: {
        alignSelf: 'center',
        color: '#F96A61',
        fontWeight: 'bold',
        fontSize: 20
    }
})
