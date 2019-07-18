/**
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  SectionList,
  StyleSheet,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native-paper';

import BookItem from './src/home/uicomponents/BookItem';
import BookDetail from './src/home/screens/BookDetail';

type Props = {
  navigation: Object,
};

class App extends React.PureComponent<Props> {
  /**
   * Renders the item for the list
   */
  renderItem = ({ section, index }) => {
    const { data } = section;

    if (index % 3 !== 0) {
      return null;
    }

    const items = [];

    for (let i = index; i < index + 3; i++) {
      if (i >= section.data.length) {
        break;
      }

      items.push(
        <BookItem
          key={`book-${data[i].id}`}
          uri={data[i].uri}
          name={data[i].name}
          onPress={() => {
            this.props.navigation.navigate('Book', {
              item: data[i],
              onPress: () => {
                // TODO: Mutation to change the book state as booked
              },
            });
          }}
          isAvailable={Math.random() >= 0.5}
        />,
      );
    }

    return <View style={styles.columnWrapper}>{items}</View>;
  };

  renderSectionHeader = ({ section }) => (
    <Text style={styles.header}>{section.title}</Text>
  );

  onRefresh = () => {
    // TODO: Get new data
  };

  keyExtractor = (item: Object) => `book-${item.id}`;

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <StatusBar barStyle="light-content" />
        <SectionList
          contentContainerStyle={styles.container}
          renderSectionHeader={this.renderSectionHeader}
          refreshing={false}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="#FFFFFF"
              title="Pull to refresh"
              titleColor="#FFFFFF"
            />
          }
          onRefresh={this.onRefresh}
          sections={[
            {
              title: 'Novedades',
              data: [
                {
                  id: 0,
                  uri: 'https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg',
                  name: 'Juego de tronos',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
                {
                  id: 1,
                  uri: 'https://imagessl1.casadellibro.com/a/l/t5/81/9788496208681.jpg',
                  name: 'Choque de reyes',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
                {
                  id: 2,
                  uri:
                    'https://3.bp.blogspot.com/-CQIuuuOWiPg/XMH3Hf9BTKI/AAAAAAAAIx0/NFooR5H9AHMOLsN7lghtSTk0P1Htpf2wwCLcBGAs/s1600/tormenta-de-espadas-george-r-r-martin.jpg',
                  name: 'Tormenta de espadas',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
                {
                  id: 3,
                  uri:
                    'https://images-eu.ssl-images-amazon.com/images/I/51xRknvHBsL.jpg',
                  name: 'Festín de cuervos',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
              ],
            },
            {
              title: 'Recientes',
              data: [
                {
                  id: 20,
                  uri: 'https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg',
                  name: 'Juego de tronos',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
                {
                  id: 23,
                  uri: 'https://imagessl1.casadellibro.com/a/l/t5/81/9788496208681.jpg',
                  name: 'Choque de reyes',
                  link: 'https://es.wikipedia.org/wiki/Fest%C3%ADn_de_cuervos',
                },
              ],
            },
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  header: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: 26,
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
  },
});

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: App,
        navigationOptions: () => ({
          title: 'Home',
          header: null,
          headerBackTitle: null,
        }),
      },
      Book: {
        screen: BookDetail,
        navigationOptions: () => ({
          title: null,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#FFFFFF',
          headerTransparent: true,
        }),
      },
    },
    {
      headerMode: 'screen',
    },
  ),
);
