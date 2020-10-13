import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, TouchableOpacity }
    from 'react-native';
import Themes from '/src/themes'
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const dataImage = [
    {
        id: "1",
        arrUri: [
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/1.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg"
        ]
    },
    {
        id: "2",
        arrUri: [
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/1.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg"
        ]
    },
    {
        id: "3",
        arrUri: [
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg"
        ]
    },
    {
        id: "4",
        arrUri: [
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/1.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg"
        ]
    },
    {
        id: "5",
        arrUri: [
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/1.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg",
            "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg"
        ]
    }
]
const STATUS = {
    LIKE: "Like",
    UNLIKE: "Unlike"
}

const SIZE_IMAGE_PER = 95
const TabSwipe = (props) => {
    const { length, currentIndexPicture } = props
    return (<View style={{
        backgroundColor: Themes.Colors.GRAY_BRIGHT_I,
        width: `${SIZE_IMAGE_PER}%`, height: 8, position: 'absolute', zIndex: 1,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',

    }}>
        <View style={{
            backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
            width: `${(currentIndexPicture + 1) * 100 / length + 1}%`,
            height: '100%',
            borderRadius: 10,
        }}>
        </View>
    </View>)
}
export default class ImageSwipe extends React.Component {

    constructor(props) {
        super(props)
        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            currentIndexPicture: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })

    }

    backPicture = () => {
        const { currentIndexPicture, currentIndex } = this.state
        if (currentIndexPicture > 0) {
            this.setState({ currentIndexPicture: currentIndexPicture - 1 })
        }
    }

    nextPicture = () => {
        const { currentIndexPicture, currentIndex } = this.state
        const length = dataImage[currentIndex].arrUri.length
        if (currentIndexPicture < length - 1) {
            this.setState({ currentIndexPicture: currentIndexPicture + 1 })
        }
    }

    checkIsSwipe = (evt) => {
        const { locationX } = evt.nativeEvent
        if (locationX < SCREEN_WIDTH / 2) {
            this.backPicture()
        } else {
            this.nextPicture()
        }
    }


    //TODO: handle when like/unlike
    stateSwipe = (state) => {
        this.setState({ currentIndexPicture: 0 })
        switch (state) {
            case STATUS.LIKE:
                break;
            case STATUS.UNLIKE:
                break;
        }
    }

    UNSAFE_componentWillMount() {
        let count = 0
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                count++
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (count < 10) {
                    this.checkIsSwipe(evt)
                }
                count = 0
                if (gestureState.dx > 120) {
                    this.stateSwipe(STATUS.LIKE)
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    this.stateSwipe(STATUS.UNLIKE)
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                        useNativeDriver: true
                    }).start()
                }
            }
        })
    }
    renderUsers = () => {
        const { t } = this.props
        let length
        if (this.state.currentIndex < dataImage.length) {
            length = dataImage[this.state.currentIndex].arrUri.length
        }
        else {
            console.log('Empty data')
        }
        return dataImage.map((item, index) => {
            if (index < this.state.currentIndex) {
                return null
            }
            else if (index == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, styles.containerAnim]}>
                        <Animated.View style={[{ opacity: this.likeOpacity }, styles.animLike]}>
                            <Text style={styles.txtLike}>{t("LIKE")}</Text>
                        </Animated.View>

                        <Animated.View style={[{ opacity: this.dislikeOpacity }, styles.animNope]}>
                            <Text style={styles.txtNope}>{t("NOPE")}</Text>
                        </Animated.View>
                        <TabSwipe length={length} currentIndexPicture={this.state.currentIndexPicture} />
                        <Image
                            style={styles.imgSwipe}
                            source={{ uri: item.arrUri[this.state.currentIndexPicture] }} />
                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        key={item.id} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                        }, styles.containerAnim]}>
                        <Animated.View style={[{ opacity: 0 }, styles.animLike]}>
                            <Text style={styles.txtLike}>{t("LIKE")}</Text>
                        </Animated.View>

                        <Animated.View style={[{ opacity: 0 }, styles.animNope]}>
                            <Text style={styles.txtNope}>{t("NOPE")}</Text>
                        </Animated.View>
                        <TabSwipe length={length} currentIndexPicture={0} />
                        <Image
                            style={styles.imgSwipe}
                            source={{ uri: item.arrUri[0] }} />
                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
        console.log('render')
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.renderUsers()}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    imgSwipe: {
        height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 20
    },
    txtNope: {
        borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10
    },
    animNope: {
        transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000
    },
    txtLike: {
        borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10
    },
    animLike: {
        transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000
    },
    containerAnim: {
        height: '100%', width: '100%', padding: 10, position: 'absolute'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
