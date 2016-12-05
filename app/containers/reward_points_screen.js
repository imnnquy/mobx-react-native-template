import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'

export default class RewardPointsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Reward points
        </Text>
        <Button style={styles.instructions} onPress={ ()=> this.props.navigator.pop() }>
          Back to Prev Screen
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
});
