/**
 * @flow
 */
import { Dimensions, Platform } from 'react-native';

/**
 * Helper to know if the app is running on iPhone X
 * https://github.com/ptelad/react-native-iphone-x-helper#readme
 * @returns {boolean}
 */
export function isX(): boolean {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  );
}

/**
 * Function that returns a determined output depending the device
 * @param iPhoneXStyle
 * @param defaultStyle
 * @returns {*}
 */
export function ifX(iPhoneXStyle, defaultStyle): Object {
  if (isX()) {
    return iPhoneXStyle;
  }
  return defaultStyle;
}
