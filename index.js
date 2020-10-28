/**
 * @format
 */
import React from 'react'
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Require cycle:']);

import Navigation from '/src/configs/Navigation'
import { Provider } from 'react-redux'
import store from './src/store'

// import SocketTest from '/test/socketTest'
// import MyAlbums from '/src/components/MyAlbums/myAlbums';
// import MyProfile from '/src/components/MyProfile/myProfile'
// import Messages from '/src/components/MainMessages/messages'
// import Chats from '/src/components/Chats/chats'
// import Picture from '/src/components/Picture/picture'
// import VoiceCallDate from '/src/components/VoiceCallDate/voiceCallDate'
// import signUpEmail from '/src/components/SignUpEmail/signUpEmail.Controller';
function Main() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

// import ChatTest from '/test/chatTest1'

AppRegistry.registerComponent(appName, () => Main);
