/**
 * @format
 */
import React from 'react'
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Require cycle:']);
// import MyProfile from '/src/components/MyProfile/myProfile'
import GifTest from '/test/gifTest'
// import Navigation from '/src/configs/Navigation'
// import { Provider } from 'react-redux'
// import store from './src/store'

// function Main() {
//     return (
//         <Provider store={store}>
//             <Navigation />
//         </Provider>
//     )
// }

AppRegistry.registerComponent(appName, () => GifTest);
