/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

// Utils
import { ifX } from '../../utils';

const Header = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: ifX(64, 54),
    marginTop: ifX(34, 16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    left: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'Arial',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    marginHorizontal: 16,
    fontFamily: 'DMSerifDisplay-Regular',
  },
});

export default Header;
