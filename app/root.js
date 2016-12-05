import React, { Component } from 'react'
import { Navigator, Text } from 'react-native'
import Routes from './navigation/routes'
import Router from './navigation/router'

export default class Root extends Component {
  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={Routes.LoginScreen}
        renderScene={Router.renderScene}
        onDidFocus={(route) => {
            if (route.reset) {
              console.log("Reset navigator stack");
              this.refs.navigator.immediatelyResetRouteStack([Routes.MainScreen])
            }
          }}
      />
    );
  }
}
