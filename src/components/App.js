import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

class App extends React.Component {
  state = {
    deals: [],
    currentDeal: null,
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({deals});
  }
  setCurrentDeal = dealId => {
    this.setState({
      currentDeal: this.state.deals.find(deal => deal.key === dealId),
    });
  };
  unsetCurrentDeal = () => {
    this.setState({
      currentDeal: null,
    });
  };
  render() {
    if (this.state.currentDeal) {
      return (
        <DealDetail
          initialDealData={this.state.currentDeal}
          onBackPress={this.unsetCurrentDeal}
        />
      );
    }
    if (this.state.deals.length > 0) {
      return (
        <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakes</Text>
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
  header: {
    fontSize: 40,
  },
});

export default App;
