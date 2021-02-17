import React from 'react';
import { View, StatusBar,StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { white, blue, orange } from './utils/color'
import { setStorage } from './utils/apiHelpers'
import { localNotification } from './utils/helpers'
import CardStatusBar from './components/CardStatusBar'
import Nav from './components/Nav'

const store = createStore(reducer, applyMiddleware(thunk))
 export default class App extends React.Component {
  componentDidMount() {
    localNotification()
    setStorage()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CardStatusBar  backgroundColor={orange}/>
          <Nav/>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orange,
  }
});