import React, { Component } from 'react';
import './App.css';
import Search from './utils/Search';
import * as ContactsAPI from './utils/ContactsAPI'


// var items = {result:['','']}
var items = null;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items
    }
    this.message = this.message.bind(this);
    this.query = "items";
  }

  componentDidMount(){

      this.setState({
          items:""
      })
    }


  message (query){
    this.query = query;
    console.log(this.query);
      ContactsAPI.getAll(this.query).then((myjson) => {
        //测试用例是items
          console.log(myjson.result);
          this.setState({
              items:myjson
          })
      })

  }

  render() {
    return (
        <Search onMessage = {this.message} items = {this.state.items} />

    );
  }
}

export default App;
