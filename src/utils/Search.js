import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
      super(props);
      this.state = {
          query:''
      }
      this.handleEnter = this.handleEnter.bind(this);
      this.searchButton = this.searchButton.bind(this);

  }


  updateQuery(query){
      this.setState({
          query: query.trim()
      })

  }

  handleEnter(event){
      if(event.charCode === 13 ){
          this.props.onMessage(this.state.query);
          console.log(event.charCode);
      }


  }

  searchButton(event){
      this.props.onMessage(this.state.query);
  }

  render(){
      let { items } = this.props;
      let screen;
      if(items){
          screen =  (
              <ol className='contact-list'>
              {items.result.map((item,index) =>
                  <li key={index} className='contact-list-item'>
                      <div className='contact-details'>
                          <p>{item[0]}</p>
                          <p>{item[1]}</p>
                      </div>
                  </li>
              )}
          </ol>)
      }
      else {
          screen = (<div style={ {padding : "20px"} } className='null'>There is nothing to show</div>)
      }

      return (
          <div>

              <div className='list-contacts'>
                  <div className='list-contacts-top'>
                      <input
                          onKeyPress={(event) => {this.handleEnter(event)}}
                          className='search-contacts'
                          type='text'
                          placeholder='Search Here'
                          onChange={(event) => {this.updateQuery(event.target.value)}}
                      />
                      <button className='button-cancel' onClick= {this.searchButton}>Search</button>
                  </div>
              </div>

              {screen}


          </div>
      )
  }



}


export default Search