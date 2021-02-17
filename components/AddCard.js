import React, { Component } from 'react'
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { white,textGray,orange, blue } from '../utils/color'
import { connect } from 'react-redux'
import { handleCreateCard } from '../actions/index'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    } 
    
    handleAnswer = (text) => {
        this.setState(() => ({
            answer: text
        }))
    }

    handleQuestion = (text) => {
        this.setState(() => ({
            question: text
        }))
    }

    handleSubmit = () => {
        const { question, answer } = this.state
        const card = {question, answer}
        const title = this.props.navigation.state.params.title

        if (question === '' || answer === '') {
            Alert.alert(
                "Empty!!",
                "Please Fill Question and Answer to Submit!",
                [{text: "OK", onPress:() => {}}],
                {cancelable: false}
            )
        } else {
            this.props.createCard(title, card)

//to set question and answer empty
            this.setState(() => ({
                question: '',
                answer: ''
            }))
        }
    }

    render() {
        return (
            //input question and answer
            <View>
                <View style={styles.inputContainer}>
                    <TextInput value={this.state.question} style={styles.input} placeholder='Please Enter The Question' onChangeText={this.handleQuestion}/>
                    <TextInput value={this.state.answer} style={styles.input} placeholder='Please Enter The Answer'onChangeText={this.handleAnswer}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch, {navigation}) => ({
    createCard: (title, card) => dispatch(handleCreateCard(title, card))
})

export default connect(null, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        marginTop: 200,
        marginLeft:60,
    },
    input: { 
        padding: 10,
        marginHorizontal: 30,
        marginBottom: 30,
       
    },
    button: {
        backgroundColor: orange,
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
        color: white,        
    }
})