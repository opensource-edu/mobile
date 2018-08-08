import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HomePage from './module/homepage/HomePage'
import DetailPage from './module/detail/DetailPage'

import { createStackNavigator, } from 'react-navigation'

const App = createStackNavigator({
  // Home: { screen: HomePage },
  Detail: { screen: DetailPage }
})

export default App

// export default class App extends Component {
//   render() {
//     return <HomePage />
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
