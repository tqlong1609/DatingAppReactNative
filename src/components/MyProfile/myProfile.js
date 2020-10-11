import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import ButtonItemEdit from '/src/components/UI/buttonItemEdit'

//TODO: About you
export default function myProfile() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <Image
                    resizeMode={'cover'}
                    style={styles.imgAvatar}
                    source={{ uri: 'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg' }}
                />
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>Trần Long, 21 </Text>
                    <ButtonItemEdit title={"Gender"} content={"Male"} />
                    <ButtonItemEdit title={"Age"} content={"18"} />
                    <ButtonItemEdit title={"Phone"} content={"+84966712391"} />
                    <ButtonItemEdit title={"Email"} content={"tqlong1609@gmail.com"} />
                    <ButtonItemEdit title={"Location"} content={"Ho Chi Minh, VietNam"} isUnderline={true} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>My Virtues </Text>
                    <ButtonItemEdit title={"Religious beliefs"} content={"Hindu"} />
                    <ButtonItemEdit title={"Work"} content={"Appscrip"} />
                    <ButtonItemEdit title={"Job"} content={"Ceo"} />
                    <ButtonItemEdit title={"Education"} content={"Engineer"} />
                    <ButtonItemEdit title={"Politics"} content={"Liberal"} />
                    <ButtonItemEdit title={"Hightest level Attended"} content={"Under Graduation"} isUnderline={true}
                        styleContent={{ width: 100 }}
                    />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>My Vitals </Text>
                    <ButtonItemEdit title={"Ethnicity"} content={"American Indian"} />
                    <ButtonItemEdit title={"Kids"} content={"Don't have kids"} />
                    <ButtonItemEdit title={"Family Plans"} content={"NA"} />
                    <ButtonItemEdit title={"Height"} content={"NA"} isUnderline={true} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.txtTitle}>My Vices </Text>
                    <ButtonItemEdit title={"Drinking"} content={"NA"} />
                    <ButtonItemEdit title={"Smoking"} content={"NA"} isUnderline={true} />
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>
            <ButtonNext isGradient={true} isCheck={true} />
        </View>

    )
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 25, fontWeight: 'bold', color: Themes.Colors.GRAY_DARK
    },
    containerItem: {
        margin: 20
    },
    imgAvatar: {
        height: 400
    },
    container: {
        flex: 1,
    }
})
