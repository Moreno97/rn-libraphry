/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

// Utils
import { ifX } from '../../utils';

const Header = ({ name, onClose }) => (
  <View style={styles.container}>
    {onClose && (
      <TouchableOpacity onPress={onClose} style={styles.close}>
        <Icon name="ios-close" color="#FFFFFF" size={34} />
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: ifX(64, 48),
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
  close: {
    position: 'absolute',
    left: 10,
    width: 24,
    alignItems: 'center',
  },
});

export default Header;
