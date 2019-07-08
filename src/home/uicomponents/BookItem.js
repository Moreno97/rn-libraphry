/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { IconButton, Headline, Card } from 'react-native-paper';

type Props = {
  uri: string,
  name: string,
  onPress: Function,
  onFavorite: Function,
  isFavorite: boolean,
};

const BookItem = ({ uri, name, onPress, onFavorite, isFavorite }: Props) => {
  let icon = 'favorite-border';
  let color = '#FFFFFF';

  if (isFavorite) {
    icon = 'favorite';
    color = 'rgba(194, 24, 91, 1)';
  }
  return (
    <Card style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{
          uri,
        }}
        style={styles.image}>
        <IconButton
          icon={icon}
          color={color}
          onPress={onFavorite}
          style={styles.icon}
        />
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
  chip: {
    marginRight: 5,
    marginBottom: 5,
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
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 0,
  },
});

export default BookItem;
