import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

@observer
export default class MainScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name="home" size={30} />
        <Text style={styles.text} >
          Weclome Karen Berg
        </Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.RecentPurchasesScreen) }>
          RecentPurchasesScreen
        </Button>

        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.RewardPointsScreen) }>
          RewardPointsScreen
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.RewardsCardScreen) }>
          RewardsCardScreen
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.CurrentOffersScreen) }>
          CurrentOffersScreen
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigator.push(Routes.AccountInformationScreen) }>
        AccountInformationScreen
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
    textAlign: 'center',
    margin: 10,
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  textRed: {
    color: 'red',
  },
});
