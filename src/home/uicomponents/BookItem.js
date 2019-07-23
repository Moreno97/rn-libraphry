/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Headline, Card, IconButton } from 'react-native-paper';

type Props = {
  uri: string,
  name: string,
  onPress: Function,
  isAvailable: Function,
};

const BookItem = ({ uri, name, onPress, isAvailable }: Props) => {
  let icon = 'cancel';
  let color = '#FFFFFF';

  if (isAvailable) {
    icon = 'check-circle';
  }
  return (
    <Card style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{
          uri,
        }}
        style={styles.image}>
        <IconButton icon={icon} color={color} style={styles.icon} />
        <View style={styles.container}>
          <Headline style={styles.name} numberOfLines={1}>
            {name}
          </Headline>
        </View>
      </ImageBackground>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'DMSerifDisplay-Italic',
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: '600',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 48,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: -3,
    top: 0,
    margin: 0,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
});

export default BookItem;
