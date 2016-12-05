import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationBar from 'react-native-navbar'
import tabStore from '../stores/tab_store'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

export default {
  renderScene (route, navigator) {
    const titleConfig = {
      title: route.title
    };

    let leftButtonConfig = { title: '' };

    const renderLeftButton = () => {
      return (
        <TouchableOpacity style={ApplicationStyles.touchableOpacity} onPress={ ()=>{ navigator.pop() }}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
      )
    }

    if(! route.hideBackButton) {
      leftButtonConfig = renderLeftButton();
    }

    let view = <route.component {...route.store} navigator={navigator}/>;

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={titleConfig} leftButton={leftButtonConfig} style={{backgroundColor: '#eee'}} statusBar={{tintColor: '#eee'}}/>
        {view}
      </View>
    )
  }
}
