import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { deviceHeight } from '/src/const/common'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes';

export default function imageDetail(props) {
    const { onPressInfo } = props
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containHeader}>
                <Image
                    style={styles.imgShow}
                    source={{ uri: "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_02_06_180_33882101/e01e378f00cce992b0dd.jpg" }} />
                <LinearGradient
                    onTouchStart={() => onPressInfo && onPressInfo()}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 2, y: 0 }}
                    colors={[Themes.Colors.PINK_DARK, 'orange']}
                    style={styles.containIcoDown}>
                    <Image
                        style={styles.imgIco}
                        source={require('/src/assets/images/down_127px.png')} />
                </LinearGradient>
            </View>
            <View style={styles.containFooter}>
                <View style={styles.containHeaderWrap}>
                    <View style={styles.containContent}>
                        <Text style={styles.txtName}>Long, 21</Text>
                        <View style={styles.containInfo}>
                            <Ionicons style={styles.icoInfo} name="briefcase-outline"></Ionicons>
                            <Text style={styles.txtInfo}>Microsoft</Text>
                        </View>
                        <View style={styles.containInfo}>
                            <Ionicons style={styles.icoInfo} name="location-outline"></Ionicons>
                            <Text style={styles.txtInfo}>Less than a kilometer away</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Virtues</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Religious belief</Text>
                        <Text style={styles.txtContent}>Christian</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Work</Text>
                        <Text style={styles.txtContent}>Microsoft</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Job</Text>
                        <Text style={styles.txtContent}>IOS developer</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Education</Text>
                        <Text style={styles.txtContent}>St Teresa</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Politics</Text>
                        <Text style={styles.txtContent}>Moderate</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vitals</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Ethnicity</Text>
                        <Text style={styles.txtContent}>American Indian</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Kids</Text>
                        <Text style={styles.txtContent}>Have kids</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Family Plans</Text>
                        <Text style={styles.txtContent}>Want kids</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Height</Text>
                        <Text style={styles.txtContent}>6.0 (182 cm)</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vices</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Drinking</Text>
                        <Text style={styles.txtContent}>No</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Smoking</Text>
                        <Text style={styles.txtContent}>No</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const FONT_SIZE = 20
const MARGIN_BOTTOM = 20
const styles = StyleSheet.create({
    containHeaderWrap: {
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        marginBottom: MARGIN_BOTTOM
    },
    txtContent: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT
    },
    txtHeader: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT_III
    },
    containOther: {
        marginHorizontal: 20,
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        marginBottom: MARGIN_BOTTOM
    },
    containRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: MARGIN_BOTTOM
    },
    containContent: {
        marginLeft: 20,
    },
    containFooter: {
    },
    txtInfo: {
        fontSize: FONT_SIZE, color: Themes.Colors.GRAY_BRIGHT_I
    },
    icoInfo: {
        fontSize: FONT_SIZE, color: Themes.Colors.GRAY_BRIGHT_I, marginRight: 15
    },
    containInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: MARGIN_BOTTOM + 5
    },
    txtName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Themes.Colors.GRAY_BRIGHT,
        marginBottom: MARGIN_BOTTOM
    },
    imgIco: {
        width: 35, height: 35
    },
    containHeader: {
        height: deviceHeight * 4 / 7 + 30
    },
    containIcoDown: {
        width: 60, height: 60, borderRadius: 60 / 2,
        position: 'absolute',
        bottom: 0, right: 20, alignItems: 'center', justifyContent: 'center'
    },
    imgShow: {
        height: deviceHeight * 4 / 7
    },
    container: {
        height: 200,
    }
})
