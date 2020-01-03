/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarcodeScanner } from '../../RNBarcodeScanner';
import { ifX } from '../../utils';
import Header from '../uicomponents/Header';

type Props = {
  navigation: Object,
};

const BarcodeScannerModal = (props: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Header
        name="Escanear ISBN"
        onClose={() => {
          props.navigation.pop(null);
        }}
      />
    </View>
    <BarcodeScanner
      onBarcodeScanned={(event: { nativeEvent: Object }) => {
        if (event.nativeEvent.code) {
          props.navigation.state.params.onBarcodeScanned(event.nativeEvent.code);
        }
        console.log();
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    height: ifX(90, 74),
  },
  info: {
    fontSize: 28,
    margin: 10,
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BarcodeScannerModal;
