import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Alert } from 'react-native'
import { clearLocalNotification, localNotification} from '../utils/helpers'
import { connect } from 'react-redux';
import { orange,darkGray,white,blue} from '../utils/color'
import StartQuiz from './StartQuiz'
// import { removeDeck } from '../actions/index';
// import { removeDeckAS } from '../utils/apiHelpers';
// import PropTypes from 'prop-types';
// import { handleD } from  '../actions/index';




class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }
    // static propTypes = {
    //     navigation: PropTypes.object.isRequired,
    //     removeDeck: PropTypes.func.isRequired,
        
    //   };
    //   shouldComponentUpdate(nextProps) {
    //     return nextProps.deck !== undefined;
    //   }
    // handleDeleteQuiz = (id) => {
    //     const { navigation } = this.props;
    //     this.props.dispatch(handleD(id)).then(()=>console.log("mas7t"));
    //     // handleD(id);
    //     console.log("3det 3leha");
    //     navigation.goBack();
    //   }
    render() {
        const { title, questions } = this.props.deck
        return (
            //addcard and start Quiz
            <ScrollView style={styles.container}>
                <View style={styles.Shape}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{questions.length}Cards</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
                    'AddCard',{title})}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => StartQuiz(this.props.deck.questions,this.props.navigation)}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    return {
        deck: state[navigation.state.params.title]
    }
}

export default connect(mapStateToProps)(DeckDetail)

const styles = StyleSheet.create({
    Shape: { 
        backgroundColor: blue ,
        borderRadius: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
        marginHorizontal: 30,
    },
    title: {
        fontSize: 25,
        color: white,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 15,
        color: darkGray,
    },
    button: {
        backgroundColor: orange,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 20,
        color: white,
    },
})