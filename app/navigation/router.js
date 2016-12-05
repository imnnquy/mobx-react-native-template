import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationBar from 'react-native-navbar'
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

    let navBar = null;
    if(! route.hideNavBar){
      navBar = <NavigationBar title={titleConfig} leftButton={leftButtonConfig} style={{backgroundColor: '#eee'}} statusBar={{tintColor: '#eee'}}/>
    }


    return (
      <View style={{ flex: 1 }}>
        {navBar}
        {view}
      </View>
    )
  }
}
