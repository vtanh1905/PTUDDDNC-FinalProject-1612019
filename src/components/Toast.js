import { ToastAndroid } from 'react-native';

export default function (message) {
    ToastAndroid.showWithGravityAndOffset(
        message,
        100,
        ToastAndroid.BOTTOM,
        0,
        325
    );
}