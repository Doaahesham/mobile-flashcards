import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { handleCreateDeck } from '../actions/index'
import { connect } from 'react-redux'
import { orange,darkGray,white,blue, textGray} from '../utils/color'

class AddDeck extends Component {
    state = {
        input: '',
    }

    handleInput = (input) => {
        this.setState(() => ({
            input
        }))
    }

    submitDeck = () => {
        const { input } = this.state
        if (input === '') {
            Alert.alert(
                "Empty!!",
                "Please Fill with Deck Title to Submit!",
                [{text: "OK", onPress:() => {}}],
                {cancelable: false}
            )
        } else {
            const { navigate } = this.props.navigation
            this.props.createDeck(input).then(() => {
                navigate(
                    'DeckDetail',
                    {
                        title: this.state.input,
                        questions: []
                    }
                )
            })
        }
    }

    render () {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>What Is The Title?</Text>
                <TextInput style={styles.input} value={this.state.input} onChangeText={this.handleInput} placeholder='Deck Title' />
                <TouchableOpacity style={styles.button} onPress={this.submitDeck}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    state,
})

const mapDispatchToProps = dispatch => ({
    createDeck: (title) => dispatch(handleCreateDeck(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: textGray,
        margin: 80,
        marginLeft:70,
    },
    input: {
        margin: 30,
        padding: 10,
    },
    button: {
        backgroundColor: orange,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 20,
        color: white,
    }

})