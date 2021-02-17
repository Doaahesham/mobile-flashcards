import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { darkGray,white, blue } from '../utils/color'
class Deck extends Component {
    render() {
        //shape of deck and 
        return(
            <TouchableOpacity style={styles.shape} onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                { title: this.props.title,
                  questions: this.props.questions})}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subTitle}>{this.props.questions.length}Cards</Text>
                    </View>
            </TouchableOpacity>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    shape: {
        backgroundColor: blue ,
        borderRadius: 100,
        flex: 1,
        height: 100,
        maxWidth: '100%',
        margin: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: white,
    },
    subTitle:{
        fontSize: 15,
        color: darkGray,
    }
})