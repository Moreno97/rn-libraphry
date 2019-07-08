/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Headline, Card } from 'react-native-paper';

type Props = {
  uri: string,
  name: string,
  onPress: Function,
};

const BookItem = (props: Props) => (
  <Card style={styles.card} onPress={props.onPress}>
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: props.uri,
      }}
      style={styles.image}>
      <View style={styles.container}>
        <Headline style={styles.name} numberOfLines={1}>
          {props.name}
        </Headline>
      </View>
    </ImageBackground>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 160,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
  },
  chip: {
    marginRight: 5,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
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
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 15,
  },
});

export default BookItem;
