/**
 * @flow
 */

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native-paper';

import BookItem from './src/home/uicomponents/BookItem';

class App extends React.PureComponent<*> {
  /**
   * Renders the item for the list
   */
  renderItem = (item: Object) => {
    return (
      <BookItem
        uri={item.item.uri}
        name={item.item.name}
        onPress={() => {}}
        onFavorite={() => {}}
        isFavorite={Math.random() >= 0.5}
      />
    );
  };

  keyExtractor = (item: Object) => `book-${item.id}`;

  render() {
    return (
      <React.Fragment>
        <Text style={styles.header}>Recommended</Text>
        <FlatList
          style={styles.container}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={3}
          data={[
            {
              id: 0,
              uri: 'https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg',
              name: 'Juego de tronos',
            },
            {
              id: 1,
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/51ucbngdycL._SX321_BO1,204,203,200_.jpg',
              name: 'Choque de reyes',
            },
            {
              id: 2,
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/51qyFY-0VjL._SX334_BO1,204,203,200_.jpg',
              name: 'Tormenta de espadas',
            },
            {
              id: 3,
              uri: 'https://images-eu.ssl-images-amazon.com/images/I/51xRknvHBsL.jpg',
              name: 'Festín de cuervos',
            },
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <Text style={styles.header}>Recently</Text>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  header: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: 26,
    padding: 10,
  },
});

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: App,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: 'rgba(242, 237, 218, 1)',
        },
        headerTitleStyle: {
          fontFamily: 'Zapfino',
        },
      },
    },
  }),
);
