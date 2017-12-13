import React, { Component } from 'react';

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
            <div>{`${months[this.props.currentState.activeMonth]}${this.props.currentState.activeYear}`}</div>
    );
  }
}
