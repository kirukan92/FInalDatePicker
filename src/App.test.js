import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import App from './App'
import Enzyme,{shallow,mount,render} from 'enzyme'
import DatePicker from './DatePicker'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const fail = done => done.fail()


describe('By default, when no props are passed',()=>{
  it('should map the date to the correct day of the week',()=>{
    //const props={PreviousDate,PreviousDay,PreviousMonth}
    let date=new Date();
    let props={currentMonth:date.getMonth(),
      currentYear:date.getFullYear(),
      PreviousMonth:new Date(date.getFullYear(),date.getMonth(),0).getMonth(),
      currentMonthLastDate:new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(),
      defaultDate:date.getDate()
    };
    PreviousMonth=new Date(date.getFullYear(),date.getMonth(),0).getMonth();
    currentMonthLastDate=new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    defaultDate=date.getDate();
    component=shallow(<DatePicker/>);
    oldDate=date.getMonth();
    PreviousDate=new Date(date.getFullYear(),oldDate,0).getDate();
    previousweek=new Date(date.getFullYear(),oldDate,0).getDay();
    let firstWeek=PreviousDate-previousweek;
    let startDate=component
    .find('tbody')
    .find('.prevDate')
    .at(0)
    .text();
    console.log(startDate);
    expect(26).toEqual(firstWeek);
  })
})