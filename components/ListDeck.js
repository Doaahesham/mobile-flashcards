  
import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveDecks } from '../actions/index'
import Deck from './Deck'
import { orange,darkGray,white,blue, textGray} from '../utils/color'

class ListDeck extends Component {
    componentDidMount() {
        this.props.rDecks()
    }

    renderItem = ({ item }) => {
    //  console.log(item.title);
       return<Deck title={item.title} questions={item.questions}navigation={this.props.navigation}/>}
        
    render () {
        const data = Object.values(this.props.decks)
        // console.log(data);
        return(
            Object.keys(data).length === 0 
            ? <View style={styles.container}>
                <Text style={styles.warning}>Empty! Let's Create New Deck :)</Text> 
            </View>
            : <View style={styles.container}>
                <FlatList style={styles.flatList} numColumns='2' data={data}renderItem={this.renderItem} keyExtractor={(item) => item.title}/>
                {/* {console.log(data)} */}
             </View>
             
        )
      
    }
}

const mapStateToProps = (state) => ({
        decks: state,
})

const mapDispatchToProps = dispatch => ({
    rDecks: () => dispatch(handleReceiveDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListDeck)

const styles = StyleSheet.create({
    container: {
        backgroundColor: orange,
    },
    warning: {
        fontSize: 25,
        padding: 10,
        color: textGray ,
    },
    flatList: {
        margin: 10,
    }
})