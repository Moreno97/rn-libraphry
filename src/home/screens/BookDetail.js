/**
 * @flow
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Headline, Text } from 'react-native-paper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Header from '../uicomponents/Header';

// Utils
import { ifX } from '../../utils';

type Props = {
  navigation: Object,
};

class BookDetail extends React.PureComponent<Props> {
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

  render() {
    const { item } = this.props.navigation.state.params;
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
          <Headline style={styles.header}>Autor</Headline>
          <Text style={styles.content}>George R. R. Martin</Text>
          <Headline style={styles.header}>Editorial</Headline>
          <Text style={styles.content}>Gilmash</Text>
          <Headline style={styles.header}>Descripción</Headline>
          <Text style={styles.content}>
            Canción de hielo y fuego: Libro cuarto La novela río más espectacular jamás
            escrita Mientras los vientos del otoño desnudan los árboles, las últimas
            cosechas se pudren en los pocos campos que no han sido devastados por la
            guerra, y por los ríos teñidos de rojo bajan cadáveres de todos los blasones
            y estirpes. Y aunque casi todo Poniente yace extenuado, en diversos rincones
            florecen nuevas e inquietantes intrigas que ansían nutrirse de los despojos
            de un reino moribundo. George R.R. Martin continúa sumando hordas de
            seguidores incondicionales mientras desgrana, con pulso firme y certero, una
            de las experiencias literarias más ambiciosas y apasionantes que se hayan
            propuesto nunca en el terreno de la fantasía. Festín de cuervos, como la
            calma que precede a la tempestad, desarrolla nuevos personajes y tramas de
            un retablo tenso y sobrecogedor.
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
    color: 'rgba(255, 164, 1, 1)',
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 16,
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
    fontSize: 28,
    margin: 20,
    fontFamily: 'DMSerifDisplay-Regular',
  },
});

export default BookDetail;
