import React, { Component } from 'react';
import DatePicker from './DatePicker'
import Header from './Header'
import ButtonComponent from './ButtonComponent'
//import './App.css'
import TableHeader from './TableHeader'
class App extends Component {
  constructor(props){
    super(props);
    this.getInitialState=this.getInitialState.bind(this);
    this.PrevMonth=this.PrevMonth.bind(this);
    this.NextMonth=this.NextMonth.bind(this);
    this.updateMonth=this.updateMonth.bind(this);
    this.PrevMonth=this.PrevMonth.bind(this);
    this.updateNextMonth=this.updateNextMonth.bind(this);
    this.NextMonth=this.NextMonth.bind(this);
    this.state={
      calendarState:this.getInitialState(),
      activeMonth:this.getInitialState().currentMonth,
      activeYear:this.getInitialState().currentYear,
      PreviousDate:this.getInitialState().PreviousDate,
      PreviousDay:this.getInitialState().PreviousDay,
      PreviousMonth:this.getInitialState().PreviousMonth,
      currentMonthLastDate:this.getInitialState().currentMonthLastDate,
      defaultDate:this.getInitialState().defaultDate
    }
  }
  getInitialState(){
    let date=new Date();
    var currentMonth=date.getMonth();
    var currentYear=date.getFullYear();
    var PreviousDate=new Date(date.getFullYear(),date.getMonth(),0).getDate();
    var PreviousDay=new Date(date.getFullYear(),date.getMonth(),0).getDay();
    var PreviousMonth=new Date(date.getFullYear(),date.getMonth(),0).getMonth();
    var currentMonthLastDate=new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    var defaultDate=date.getDate();
    return{currentMonth,currentYear,PreviousDate,PreviousDay,currentMonthLastDate,defaultDate,PreviousMonth}
  }

 updateMonth(){
    this.setState({PreviousDate:new Date(this.state.activeYear,this.state.activeMonth,0).getDate(),PreviousDay:new Date(this.state.activeYear,this.state.activeMonth,0).getDay()});
    console.log(this.state.activeMonth.currentMonth);
  }

   PrevMonth(e){
    this.state.activeMonth===0 ? 
        this.setState({activeMonth:this.state.activeMonth+11,activeYear:this.state.activeYear-1},this.updateMonth):
        this.setState({activeMonth:this.state.activeMonth-1},this.updateMonth);
   }

   updateNextMonth(e){
    this.setState({PreviousDate:new Date(this.state.activeYear,this.state.activeMonth,0).getDate(),PreviousDay:new Date(this.state.activeYear,this.state.activeMonth,0).getDay()});
  }

  NextMonth(){
    (this.state.activeMonth===11) ? 
        this.setState({activeMonth:this.state.activeMonth-11,activeYear:this.state.activeYear+1},this.updateNextMonth):
        this.setState({activeMonth:this.state.activeMonth+1},this.updateNextMonth);
  }

  render() {
    return (
      <div className="App">
        <span value="previous" onClick={(e)=>this.PrevMonth(e)}>&#8592;</span><Header currentState={this.state}/>
        <span value="next" onClick={(e)=>this.NextMonth(e)}>&#8594;</span>
        <table>
          <TableHeader/>
          <DatePicker data={this.state}/>
        </table>
        <ButtonComponent/>
      </div>
    );
  }
}

export default App;
