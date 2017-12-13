import React, { Component } from 'react';
import DatePicker from './DatePicker'
import Header from './Header'
//import './App.css'
import TableHeader from './TableHeader'
class App extends Component {
  constructor(props){
    super(props);
    this.getInitialState=this.getInitialState.bind(this);
    this.PrevMonth=this.PrevMonth.bind(this);
    this.NextMonth=this.NextMonth.bind(this);
    this.state={
      activeMonth:this.getInitialState().currentMonth,
      activeYear:this.getInitialState().currentYear,
    }
  }
  getInitialState(){
    let date=new Date();
    var currentMonth=date.getMonth();
    var currentYear=date.getFullYear();
    //var PreviousDate=new Date(this.state.activeYear,this.state.activeMonth,0).getDate();
    //var PreviousDay=new Date(this.state.activeYear,this.state.activeMonth,0).getDay();
    //var currentMonthLastDate=new Date(this.state.activeYear,this.state.activeMonth+1, 0).getDate();
    //var defaultDate=date.getDate();
    return{currentMonth,currentYear}
  }
  PrevMonth(e){
    console.log(this.state.activeMonth.currentMonth);
    this.state.activeMonth===0 ? this.setState({activeMonth:this.state.activeMonth+11,activeYear:this.state.activeYear-1}):
                                 this.setState({activeMonth:this.state.activeMonth-1});
  }

  NextMonth(e){
    console.log(this.state.activeMonth.currentMonth);
    (this.state.activeMonth===11) ? this.setState({activeMonth:this.state.activeMonth-11,activeYear:this.state.activeYear+1}):
                                    this.setState({activeMonth:this.state.activeMonth+1});
  }
  render() {
    return (
      <div className="App">
        <button value="previous" onClick={(e)=>this.PrevMonth(e)}>Previous</button><Header currentState={this.state}/>
        <button value="next" onClick={(e)=>this.NextMonth(e)}>Next</button>
        <table>
          <TableHeader/>
          <DatePicker/>
        </table>
      </div>
    );
  }
}

export default App;
