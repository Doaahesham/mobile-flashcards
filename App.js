import React from 'react';
import { View, StatusBar,StyleSheet } from 'react-native';
import ListDeck from './components/ListDeck'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { createStackNavigator } from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { white, blue, orange } from './utils/color'
import Constants from 'expo-constants'
import { setStorage } from './utils/apiHelpers'
import { localNotification } from './utils/helpers'
import { createAppContainer } from "react-navigation";

function FlashCardStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  Deck: {
    screen: ListDeck,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK '
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: blue, 
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

const MainNavigator = createStackNavigator({
  DECKS: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})
const Nav=createAppContainer(MainNavigator);



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
          <FlashCardStatusBar  backgroundColor={orange}/>
          <Nav />
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