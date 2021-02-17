import React, { Component } from 'react'
import Constants from 'expo-constants'
import { View, StatusBar,StyleSheet } from 'react-native';
import { white, blue, orange } from '../utils/color'



class CardStatusBar extends Component { 
   
  const={ backgroundColor, ...props}=this.props
   
    render() {
        return (
            <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
          </View>
        );
    }
}
export default CardStatusBar;