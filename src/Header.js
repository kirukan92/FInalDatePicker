import React, { Component } from 'react';

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render(){
    return (
            <span><span>{months[this.props.currentState.activeMonth]}</span><span>{this.props.currentState.activeYear}</span></span>
    );
  }
}
