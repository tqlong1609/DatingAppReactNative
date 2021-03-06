/**
 * @format
 */
import React from 'react'
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import { LogBox } from 'react-native'
import Toast from 'react-native-toast-message';
import GoogleLogin from '/test/reanimatedTest'
// import PushNotification from '/test/pushNotification'
LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

// import Navigation from '/src/configs/Navigation'
// import { Provider } from 'react-redux'
// import store from './src/store'

// function Main() {
//     return (
//         <>
//             <Provider store={store}>
//                 <Navigation />
//             </Provider>
//             <Toast ref={(ref) => Toast.setRef(ref)} />
//         </>
//     )
// }

AppRegistry.registerComponent(appName, () => GoogleLogin)
