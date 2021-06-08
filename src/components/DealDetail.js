import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

import {priceDisplay} from '../utils';
import ajax from '../ajax';

class DealDetail extends React.Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };
  state = {
    dealData: this.props.initialDealData,
  };
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetails(this.state.dealData.key);
    this.setState({
      dealData: fullDeal,
    });
  }
  render() {
    const {dealData} = this.state;
    return (
      <View style={styles.deal}>
        <Image source={{uri: dealData.media[0]}} style={styles.image} />
        <View style={styles.detail}>
          <View>
            <Text style={styles.title}>{dealData.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.info}>
              <Text style={styles.price}>{priceDisplay(dealData.price)}</Text>
              <Text style={styles.cause}>{dealData.cause.name}</Text>
            </View>
            {dealData.user && (
              <View style={styles.user}>
                <Image
                  source={{uri: dealData.user.avatar}}
                  style={styles.avatar}
                />
                <Text>{dealData.user.name}</Text>
              </View>
            )}
          </View>
          <View style={styles.description}>
            <Text>{dealData.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
    borderColor: '#bbb',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  detail: {},
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  info: {
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  cause: {
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  description: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dotted',
    margin: 10,
    padding: 10,
  },
});

export default DealDetail;
