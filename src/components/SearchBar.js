import React from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchText: '',
  };

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  debounceSearch = debounce(this.props.search, 3000);

  handleChangeText = text => {
    this.setState({searchText: text}, () => {
      this.debounceSearch(this.state.searchText);
    });
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder=" Search all deals"
          style={styles.input}
          onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default SearchBar;
