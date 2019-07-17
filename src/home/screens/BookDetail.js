/**
 * @flow
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Headline, Text } from 'react-native-paper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Header from '../uicomponents/Header';

type Props = {
  navigation: Object,
};

class BookDetail extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }: Object) => ({
    title: navigation.state.params.item.name,
  });

  onPress = () => {
    this.props.navigation.goBack();
  };

  renderStickyHeader = () => {
    const { item } = this.props.navigation.state.params;
    return <Header name={item.name} onPress={this.onPress} />;
  };

  renderBackground = () => {
    const { item } = this.props.navigation.state.params;
    return (
      <Image
        style={styles.image}
        source={{
          uri: item.uri,
        }}
      />
    );
  };

  renderForeground = () => {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.foreground}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          contentContainerStyle={styles.container}
          parallaxHeaderHeight={220}
          stickyHeaderHeight={74}
          renderBackground={this.renderBackground}
          renderStickyHeader={this.renderStickyHeader}
          outputScaleValue={5}
          renderForeground={this.renderForeground}>
          <Headline style={styles.header}>Editorial</Headline>
          <Text style={styles.content}>Gilmash</Text>
          <Headline style={styles.header}>Descripción</Headline>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum
            tempor congue. Duis est libero, vulputate sed maximus eget, efficitur eget
            erat. Nam a porttitor sem, ut condimentum urna. Quisque accumsan mattis
            magna, non placerat mi euismod eu. Morbi interdum convallis massa, at
            sodales leo. Quisque vestibulum orci ac lobortis rutrum. Donec tellus
            mauris, interdum eu pharetra a, auctor quis ipsum. Ut ultrices lacus in
            felis semper rhoncus. Quisque faucibus in diam in mollis. Praesent dictum
            ante in ultrices interdum. Vivamus placerat elit metus, nec dictum diam
            posuere in. Praesent pharetra ullamcorper metus, ac tincidunt nisi gravida
            vitae. Nam tristique mi magna, a congue justo tempor quis. Vivamus at purus
            sagittis risus rutrum consectetur et ac massa.
          </Text>
          <Headline style={styles.header}>Información</Headline>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum
            tempor congue. Duis est libero, vulputate sed maximus eget, efficitur eget
            erat. Nam a porttitor sem, ut condimentum urna. Quisque accumsan mattis
            magna, non placerat mi euismod eu. Morbi interdum convallis massa, at
            sodales leo. Quisque vestibulum orci ac lobortis rutrum. Donec tellus
            mauris, interdum eu pharetra a, auctor quis ipsum. Ut ultrices lacus in
            felis semper rhoncus. Quisque faucibus in diam in mollis. Praesent dictum
            ante in ultrices interdum. Vivamus placerat elit metus, nec dictum diam
            posuere in. Praesent pharetra ullamcorper metus, ac tincidunt nisi gravida
            vitae. Nam tristique mi magna, a congue justo tempor quis. Vivamus at purus
            sagittis risus rutrum consectetur et ac massa.
          </Text>
        </ParallaxScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    fontFamily: 'DMSerifDisplay-Regular',
    marginVertical: 5,
    margin: 20,
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  foreground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    margin: 20,
    fontFamily: 'DMSerifDisplay-Regular',
  },
});

export default BookDetail;
