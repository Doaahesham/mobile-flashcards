import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Alert } from 'react-native'
import { clearLocalNotification, localNotification} from '../utils/helpers'
import { connect } from 'react-redux';
import { orange,darkGray,white,blue} from '../utils/color'



const StartQuiz = (deck, navigation) => {
    const questions = deck
    if(questions.length !== 0) {
        // clearLocalNotification().then(localNotification)
        navigation.navigate('Quiz', {questions})
    } else Alert.alert(
        "Empty!!",
        "Please Add some cards to start :)",
        [{text: "OK", onPress:() => {}}],
        {cancelable: false}
    )
}
export default StartQuiz