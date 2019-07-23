/**
 * @flow
 */

import React from 'react';
import { View, Image, StyleSheet, Linking } from 'react-native';
import { Headline, Text, IconButton, Button } from 'react-native-paper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../uicomponents/Header';

// Utils
import { ifX } from '../../utils';

type Props = {
  navigation: Object,
  onPress: Function,
};

class BookDetail extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }: Object) => ({
    headerRight: (
      <IconButton
        icon="link"
        color="#FFFFFF"
        onPress={() => {
          const { item } = navigation.state.params;
          Linking.openURL(item.link);
        }}
      />
    ),
  });

  renderStickyHeader = () => {
    const { item } = this.props.navigation.state.params;
    return <Header name={item.name} />;
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

  getRating() {
    const { item } = this.props.navigation.state.params;
    const stars = [];
    for (let i = 0; i < item.rating; i++) {
      stars.push(
        <Icon
          key={`star-${i}`}
          name="star"
          size={18}
          color="rgba(252, 226, 5, 1)"
          style={styles.star}
        />,
      );
    }

    return stars;
  }

  render() {
    const { item, onPress } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          contentContainerStyle={styles.container}
          contentBackgroundColor="#000000"
          parallaxHeaderHeight={220}
          stickyHeaderHeight={ifX(90, 74)}
          renderBackground={this.renderBackground}
          renderStickyHeader={this.renderStickyHeader}
          outputScaleValue={5}
          renderForeground={this.renderForeground}>
          <Headline style={styles.header}>Disponible</Headline>
          <View style={styles.stars}>
            <Icon
              name={item.isAvailable ? 'check' : 'close'}
              size={18}
              color={item.isAvailable ? '#0B6623' : '#FF0000'}
              style={styles.star}
            />
          </View>
          <Headline style={styles.header}>Autor</Headline>
          <Text style={styles.content}>George R. R. Martin</Text>
          <Headline style={styles.header}>Editorial</Headline>
          <Text style={styles.content}>Gilmash</Text>
          <Headline style={styles.header}>Valoración</Headline>
          <View style={styles.stars}>{this.getRating()}</View>
          <Headline style={styles.header}>Descripción</Headline>
          <Text style={styles.content}>
            Mientras los vientos del otoño desnudan los árboles, las últimas cosechas se
            pudren en los pocos campos que no han sido devastados por la guerra, y por
            los ríos teñidos de rojo bajan cadáveres de todos los blasones y estirpes. Y
            aunque casi todo Poniente yace extenuado, en diversos rincones florecen
            nuevas e inquietantes intrigas que ansían nutrirse de los despojos de un
            reino moribundo. George R.R. Martin continúa sumando hordas de seguidores
            incondicionales mientras desgrana, con pulso firme y certero, una de las
            experiencias literarias más ambiciosas y apasionantes que se hayan propuesto
            nunca en el terreno de la fantasía. Festín de cuervos, como la calma que
            precede a la tempestad, desarrolla nuevos personajes y tramas de un retablo
            tenso y sobrecogedor.
          </Text>
        </ParallaxScrollView>
        <Button
          icon="book"
          onPress={onPress}
          disabled={!item.isAvailable}
          color="white"
          mode="outlined"
          style={styles.button}
          contentStyle={styles.contentButton}>
          PEDIR
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 50,
  },
  header: {
    fontFamily: 'DMSerifDisplay-Regular',
    marginVertical: 5,
    margin: 20,
    color: 'rgba(255, 164, 1, 1)',
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  foreground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    fontFamily: 'DMSerifDisplay-Italic',
  },
  button: {
    backgroundColor: 'rgba(0, 130, 160, 1)',
    height: 54,
    position: 'absolute',
    bottom: ifX(40, 20),
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: '600',
  },
  stars: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    marginRight: 5,
  },
  contentButton: {
    height: 54,
  },
});

export default BookDetail;
