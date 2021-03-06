import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import { TagSelect } from 'react-native-tag-select';
import Const from '/src/const'
import AnimLottieView from '/src/components/UI/animLottieView'



const MAX_SELECT = 5

const TagSelectComponent = (props) => {
    const { isRender, selectedItem, arrInterest } = props
    if (isRender) {
        return (
            <View>
                <TagSelect
                    data={Const.Interests.INTERESTS}
                    onItemPress={(item) => selectedItem(item)}
                    containerStyle={styles.tagSelectContain}
                    itemStyle={styles.item}
                    itemLabelStyle={styles.label}
                    value={arrInterest}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                />
                <TagSelect
                    data={Const.Interests.INTERESTS_1}
                    onItemPress={(item) => selectedItem(item)}
                    containerStyle={[styles.tagSelectContain, { marginTop: 0 }]}
                    itemStyle={styles.item}
                    value={arrInterest}
                    itemLabelStyle={styles.label}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                />
                <TagSelect
                    data={Const.Interests.INTERESTS_3}
                    onItemPress={(item) => selectedItem(item)}
                    containerStyle={[styles.tagSelectContain, { marginTop: 0 }]}
                    itemStyle={styles.item}
                    value={arrInterest}
                    itemLabelStyle={styles.label}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                />
                <TagSelect
                    data={Const.Interests.INTERESTS_2}
                    onItemPress={(item) => selectedItem(item)}
                    containerStyle={[styles.tagSelectContain, { marginTop: 0 }]}
                    itemStyle={styles.item}
                    value={arrInterest}
                    itemLabelStyle={styles.label}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                />
            </View>

        )
    }
    else {
        return <View>
            <AnimLottieView
                source={require('/src/assets/lotties/8863-waiting.json')}
            />
        </View>
    }
}

export default function interestInfomation(props) {
    const { onPressBack, selectedItem, arrInterest } = props

    const [isRender, setIsRender] = useState(false)
    useEffect(() => {
        setIsRender(true)
    }, [])



    return (
        <ScrollView style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <ButtonBack
                title={'Edit Interest'}
                onPress={onPressBack}
            />
            <Text style={styles.txtDetail}>Select interests that you'd like to share, choose a minimum of 3 interests.</Text>
            <View style={styles.containContent}>
                <Text style={styles.txtContent}>INTERESTS</Text>
            </View>
            <TagSelectComponent isRender={isRender}
                selectedItem={selectedItem}
                arrInterest={arrInterest}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        ...Themes.Styles.txtContentInfo
    },
    containContent: {
        ...Themes.Styles.containContentInfo
    },
    txtDetail: {
        ...Themes.Styles.txtDetailInfo
    },
    item: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Themes.Colors.GRAY_BRIGHT_II,
    },
    label: {
        color: Themes.Colors.GRAY_BRIGHT_II,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    itemSelected: {
        borderColor: Themes.Colors.PINK_DARK,
        backgroundColor: 'white'
    },
    labelSelected: {
        color: Themes.Colors.PINK_DARK,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    tagSelectContain: {
        marginHorizontal: 10,
        marginTop: 15
    }
})
