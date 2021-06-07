import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const {deal} = this.props;
    console.log(this.props.deal.media[0]);
    return (
      <View>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View>
          <Text>{deal.title}</Text>
          <Text>{deal.price}</Text>
          <Text>{deal.cause.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
});
