import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {priceDisplay} from '../utils';

export class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const {deal} = this.props;
    console.log(this.props.deal.media[0]);
    return (
      <TouchableOpacity style={styles.deal}>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.header}>
            <Text>{deal.title}</Text>
          </View>
          <View style={styles.footer}>
            <Text>{deal.cause.name}</Text>
            <Text style={{fontWeight: 'bold'}}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  deal: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  header: {
    fontStyle: 'italic',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  info: {
    borderColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
  },
});
