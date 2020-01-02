/**
 * @flow
 */

import React from 'react';
import { StyleSheet, requireNativeComponent } from 'react-native';

type Props = {
  onBarcodeScanned: Function,
};

const BarcodeScanner = ({ onBarcodeScanned }: Props) => (
  <RNBarcodeScanner style={styles.container} onBarcodeScanned={onBarcodeScanned} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const RNBarcodeScanner = requireNativeComponent('RNBarcodeScanner', BarcodeScanner);

export { BarcodeScanner };
