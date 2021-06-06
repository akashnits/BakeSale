import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class DealList extends React.Component {
  render() {
    return (
      <View>
        <Text>Deals...</Text>
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
