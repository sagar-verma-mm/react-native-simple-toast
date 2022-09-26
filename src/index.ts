import {Platform } from 'react-native';

const RCTToast = Platform.select({
  ios: require("./NativeSimpleToast").default,
  android: require('react-native').ToastAndroid,
});

export default {
  // Toast duration constants
  SHORT: RCTToast.SHORT,
  LONG: RCTToast.LONG,

  // Toast gravity constants
  TOP: RCTToast.TOP,
  BOTTOM: RCTToast.BOTTOM,
  CENTER: RCTToast.CENTER,

  show(message, duration, viewControllerBlacklist) {
    RCTToast.show(
      message,
      duration === undefined ? RCTToast.SHORT : duration,
      viewControllerBlacklist
    );
  },

  showWithGravity(message, duration, gravity, viewControllerBlacklist) {
    RCTToast.showWithGravity(
      message,
      duration === undefined ? RCTToast.SHORT : duration,
      gravity,
      viewControllerBlacklist
    );
  },
};
