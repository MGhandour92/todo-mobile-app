import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
    //beginning state [empty text]
    state = { text: '' }

    //set state with the new text
    onChangeText = (text) => this.setState({text})

    onSubmitEditing = () => {
        const { onSubmitEditing } = this.props //get the onSubmitEditing property
        const { text } = this.state //get the current state text

        if (!text) return //Don't submit if empty text

        //else //if there is a text
        onSubmitEditing(text) //call the property onSubmitEditing and pass the text
        this.setState({ text: '' }) //clear text
    }

    render() {
        const {placeholder} = this.props
        const {text} = this.state
        
        return (
            <TextInput
             style= {styles.input}
             value={text}
             placeholder = {placeholder}
             onChangeText = {this.onChangeText}
             onSubmitEditing = {this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50
    }
})