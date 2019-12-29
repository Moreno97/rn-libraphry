/*
 * @flow
 */

import React from 'react';
import { StyleSheet, requireNativeComponent } from 'react-native';

const BarcodeScanner = () => (
  <RNBarcodeScanner {...this.props} style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const RNBarcodeScanner = requireNativeComponent('RNBarcodeScanner', BarcodeScanner);

export { BarcodeScanner };
