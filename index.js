/**
 * @format
 */
import React from 'react'
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Require cycle:']);

// import Navigation from '/src/configs/Navigation'
// import { Provider } from 'react-redux'
// import store from './src/store'
// import SocketTest from '/test/socketTest'
import MyAlbums from '/src/components/MyAlbums/myAlbums';
// function Main() {
//     return (
//         <Provider store={store}>
//             <Navigation />
//         </Provider>
//     )
// }

AppRegistry.registerComponent(appName, () => MyAlbums);
