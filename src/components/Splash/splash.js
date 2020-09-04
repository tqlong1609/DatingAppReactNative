import React, { Component } from 'react'
import { Text, View } from 'react-native'

import LottieView from 'lottie-react-native'

export class splash extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F1919D' }}>
                <LottieView
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    source={require('../../assets/lotties/16555-firery-passion.json')}
                    autoPlay
                    loop
                />
            </View>
        )
    }
}

export default splash
