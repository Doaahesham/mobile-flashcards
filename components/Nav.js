import ListDeck from '../components/ListDeck'
import AddDeck from '../components/AddDeck'
import DeckDetail from '../components/DeckDetail'
import Quiz from '../components/Quiz'
import AddCard from '../components/AddCard'
import { createStackNavigator } from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from "react-navigation";
import { white, blue, orange } from '../utils/color'


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
  export default createAppContainer(Nav);