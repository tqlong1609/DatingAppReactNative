import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, TouchableOpacity }
    from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
const COLOR_ICON = 'white'
let isSwipe = false

const Users = [
    { id: "1", uri: "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/1.jpg" },
    { id: "2", uri: "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/2.jpg" },
    { id: "3", uri: "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/3.jpg" },
    { id: "4", uri: "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/4.jpg" },
    { id: "5", uri: "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/12%20Tinder%20Swipe%20Deck/%232%20Complete%20Animation/assets/5.jpg" },
]

export default class ImageSwipe extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
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

    checkIsSwipe = (evt) => {
        if (isSwipe) { isSwipe = false }
        else {
            const { locationX } = evt.nativeEvent
            if (locationX < SCREEN_WIDTH / 2) {
                console.log('left')
            } else {
                console.log('right')
            }
        }
    }

    UNSAFE_componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                isSwipe = true
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                this.checkIsSwipe(evt)
                if (gestureState.dx > 120) {
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

    handlePress(evt) {
        console.log('evt.nativeEvent.locationX', evt.nativeEvent.locationX)
        // Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        // Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
    }

    renderUsers = () => {

        return Users.map((item, i) => {


            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, { height: '100%', width: '100%', padding: 10, position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                        </Animated.View>

                        <Image
                            style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 20 }}
                            source={{ uri: item.uri }} />


                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        key={item.id} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: '100%', width: '100%', padding: 10, position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                        </Animated.View>

                        <Image
                            style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 20 }}
                            source={{ uri: item.uri }} />

                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
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
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
