import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native';
import Title from './Components/Title';
import Input from './Components/Input';
import List from './Components/List';

export default class App extends Component {

  state = { todos: ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'] }

  //Adding todo item
  onAddTodo = (text) => {
    const { todos } = this.state // get the old todos
    const newState = { todos: [text, ...todos] } // add new todo then add the old array of todos

    this.setState(newState) //set with the new state
  }


  //remove todo by index
  onRemoveTodo = (index) => {
    const { todos } = this.state // get the old todos
    const newState = { todos: todos.filter((todo, i) => i !== index) }
    // ^ filter the todos to get all elements except the specified index
    // [callback function] explanation:
    // function filterTodo(todo, i)
    // {
    //   return i !== index;
    // }

    this.setState(newState) //set with the new state
  }

  render() {
    const { todos } = this.state //get current todos array

    return (
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('App', () => App)