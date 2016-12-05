import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import Button from 'react-native-button'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles, {LoginStyle} from '../styles'

@observer
export default class LoginScreen extends Component {
  static propTypes = {
    userStore: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={LoginStyle.container}>
            <Image style={LoginStyle.bg} source={require('../images/login/login1_bg.png')} />
            <View style={LoginStyle.header}>
                <Image style={LoginStyle.mark} source={require('../images/login/login1_mark.png')} />
            </View>
            <View style={LoginStyle.inputs}>
                <View style={LoginStyle.inputContainer}>
                    <Image style={LoginStyle.inputUsername} source={require('../images/login/login1_person.png')}/>
                    <TextInput 
                        style={[LoginStyle.input, LoginStyle.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        value={this.props.userStore.username}
                    />
                </View>
                <View style={LoginStyle.inputContainer}>
                    <Image style={LoginStyle.inputPassword} source={require('../images/login/login1_lock.png')}/>
                    <TextInput
                        password={true}
                        style={[LoginStyle.input, LoginStyle.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#FFF"
                        value={this.props.userStore.password}
                    />
                </View>
                <View style={LoginStyle.forgotContainer}>
                    <Text style={LoginStyle.greyFont}>Forgot Password</Text>
                </View>
            </View>
            <View style={LoginStyle.signin}>
                <Text style={LoginStyle.whiteFont} onPress={ ()=> this.props.navigator.immediatelyResetRouteStack([Routes.MainScreen]) }>Sign In</Text>
            </View>
            <View style={LoginStyle.signup}>
                <Text style={LoginStyle.greyFont}>Don't have an account?<Text style={LoginStyle.whiteFont}>  Sign Up</Text></Text>
            </View>
        </View>
    )
  }
}