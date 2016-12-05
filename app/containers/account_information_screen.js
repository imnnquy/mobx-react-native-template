import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import ApplicationStyles from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

@observer
export default class AccountInformationScreen extends Component {

  static propTypes = {
    UserStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name='building' size={30}></Icon>
        <Text style={styles.text}>
          Account information
        </Text>
        <Text style={styles.text}>Clicked: <Text style={styles.textRed}>{this.props.UserStore.counter}</Text> times</Text>
        <Button style={ApplicationStyles.button} onPress={() => this.props.UserStore.increment()}>
          |   +1   |
        </Button>
        <Button style={ApplicationStyles.button} onPress={() => this.props.UserStore.incrementAsync()}>
          |   +1 async  |
        </Button>
        <Button onPress={ ()=> this.props.navigator.pop() }>
          Back
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 100,
    marginBottom: 20,
  },
  text: {
    margin: 10
  },
  textRed: {
    color: 'red',
  },
});
