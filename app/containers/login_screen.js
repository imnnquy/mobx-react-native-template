import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

@observer
export default class LoginScreen extends Component {
  static propTypes = {
    counterStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name="home" size={30} />
        <Text style={styles.text} >
          Weclome to Loyalty
        </Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.immediatelyResetRouteStack([Routes.MainScreen]) }>
          Click to Login
        </Button>
      </View>
    )
  }
}