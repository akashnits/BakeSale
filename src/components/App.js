import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    deals: [],
    currentDeal: null,
    searchDeals: [],
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
  searchDeals = async searchText => {
    //update searchDeals
    let searchResults = await ajax.fetchDealFromSearch(searchText);
    this.setState(prevState => {
      if (searchText) {
        return {searchDeals: searchResults};
      } else {
        return {searchDeals: []};
      }
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
    let dealsToDisplay =
      this.state.searchDeals.length > 0
        ? this.state.searchDeals
        : this.state.deals;
    if (dealsToDisplay.length > 0) {
      return (
        <View style={styles.main}>
          <SearchBar search={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </View>
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
  main: {
    marginTop: 50,
  },
});

export default App;
