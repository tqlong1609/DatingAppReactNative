import { ToastAndroid } from 'react-native'
import Toast from 'react-native-toast-message';

export const ToastShortTop = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
    );
};

export const ToastShortBottom = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
    );
};

export const ToastModal = (type, position, text1, text2, visibilityTime) => {
    Toast.show({
        type: type, //'success | error | info'
        position: position, //'top | bottom'
        text1: text1,
        text2: `${text2} 👋`,
        visibilityTime: visibilityTime, // 3000ms = 3s
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => { },
        onHide: () => { }
    });
};