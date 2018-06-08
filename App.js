import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header } from './src/components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/store/reducers'
import LibraryList from './src/components/LibraryList'

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex:1 }}>
          <Header headerText="Tech Stqac"/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
