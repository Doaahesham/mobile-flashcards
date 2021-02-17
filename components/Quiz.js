import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { orange,darkGray,white,blue,red,green, textGray} from '../utils/color'
import { withNavigation } from 'react-navigation'


class Quiz extends Component {
    state = {
        isFlipped: false,
        questions: null, 
        finish: false,
        correctAnswers: 0,
        wrongAnswers: 0,
        index: 0,
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params
        this.setState(() => ({
            questions
        }))
    }

    onCorrect = () => {
        if (!this.state.finish) {
            this.setState((previousState) => {
                const { questions, correctAnswers, index, finish } = previousState
                return {correctAnswers: correctAnswers + 1 ,
                    index: index === (questions.length - 1) ? questions.length - 1 : index + 1,
                    finish: index === (questions.length - 1) && !finish }});
                    this.setState({isFlipped:false});
                }}

    onIncorrect = () => {
        if (!this.state.finish) {
            this.setState((previousState) => {
                const { questions, wrongAnswers, index, finish } = previousState
                return {
                    wrongAnswers: wrongAnswers + 1 ,
                    index: index === (questions.length - 1) ? questions.length - 1 : index + 1,
                    finish: index === (questions.length - 1) && !finish 
                }
            });this.setState({isFlipped:false});
        }
    }

    handleFilpped = () => {
        this.setState((previousState) => ({
            isFlipped: !previousState.isFlipped
        }))
    }

    backToDeck = () => {
        const { goBack } = this.props.navigation
        goBack()
    }

    restartQuiz = () => {
        this.setState(() => ({
            isFlipped: false,
            correctAnswers: 0,
            wrongAnswers: 0,
            index: 0,
            finish: false,
        }))
    }

    render() {
        const { isFlipped, questions, correctAnswers, wrongAnswers, index, finish } = this.state
        return(
            <View style={styles.container}>
                {
                    (questions) &&
                        (
                            (!finish)
                                ? ( <View style={styles.container}>
                                        <Text style={styles.countSentence}>{index + 1} / {questions.length}</Text>
                                        <View style={styles.first}>
                                            <Text style={styles.questionText}>{isFlipped ? questions[index].answer : questions[index].question}</Text>
                                            <TouchableOpacity onPress={this.handleFilpped}><Text style={styles.flippedText}>{isFlipped ? 'Question': 'Answer'}</Text></TouchableOpacity>
                                        </View>
                                        <View style={styles.second}>
                                            {/* buttons correct and incorrect */}
                                            <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={this.onCorrect}><Text style={styles.buttonText}>Correct Answer</Text></TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, styles.incorrectButton]} onPress={this.onIncorrect}>
                                                <Text style={styles.buttonText}>Incorrect Answer</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>)
                                : (
                                    <View style={styles.container}>
                                        <View  style={styles.first}>
                                            <Text style={{fontSize: 25, color: textGray, padding: 10}}>Total Questions: {questions.length}</Text>
                                            <Text style={{fontSize: 25, color: textGray, padding: 10}}>Correct Answers: {correctAnswers}</Text>
                                            <Text style={{fontSize: 25, color: textGray, padding: 10}}>Incorrect Answers: {wrongAnswers}</Text>                               
                                        </View>
                                        <View style={styles.second}>
                                            <TouchableOpacity style={[styles.button, {backgroundColor: orange}]} onPress={this.restartQuiz}>
                                                <Text style={styles.buttonText}>Take a Quiz Again</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, {backgroundColor: orange}]} onPress={this.backToDeck}>
                                                <Text style={styles.buttonText}>Back to Deck</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                        )
                }
            </View>
        )}}

export default withNavigation(Quiz)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:50,
        },
    first: {
        alignItems: 'center',
        marginTop: 120,
        flex: 2,  
    },
    second: {
        flex: 1,
    },
    countSentence: {
         fontSize: 20,
        padding: 10,
    },
    questionText: {
        textAlign: 'center',
        fontSize: 35,
        color: textGray,
        marginHorizontal: 20,
    },
    flippedText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: blue,
        marginTop: 30,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 20,  
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
    },
 
    buttonText: {
        fontSize: 20,
        color: 'white',      
    },   
    correctButton: {
        backgroundColor: green,
    },
    incorrectButton: {
        backgroundColor: red,
    }
})