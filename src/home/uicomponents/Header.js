/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';

const Header = ({ name, onPress }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <BaseButton onPress={onPress}>
        <View style={styles.button}>
          <Icon name="ios-arrow-back" size={30} color="#FFFFFF" />
          <Text style={styles.buttonTitle}>Back</Text>
        </View>
      </BaseButton>
    </View>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 64,
    marginTop: 16,
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
