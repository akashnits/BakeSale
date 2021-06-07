/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ajax from '../ajax';
import {DealList} from './DealList';

class App extends React.Component {
  state = {
    deals: [],
  };
  async componentDidMount() {
    //lifecycle method to be called first
    const deals = await ajax.fetchInitialDeals();
    console.log(deals);
    this.setState({deals: deals});
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} />
        ) : (
          <Text>BakeSale</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
