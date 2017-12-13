import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme,{shallow,mount,render} from 'enzyme'
import DatePicker from './DatePicker'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const fail = done => done.fail()
var date=new Date();
describe(`By default, when no props are passed`, () => {
  it('should map the date to the correct day of the week',()=>{
    var oldDate=date.getMonth();
    var PreviousDate=new Date(date.getFullYear(),oldDate,0).getDate();
    const component=shallow((<App/>));
    console.log(component.find('td'));
  })

  it.skip(`today's date is both selected & is active`,()=>{
      var component=shallow((<DatePicker {...Props}/>));

  })

  describe.skip(`should show the current`, () => {
    it(`month's name`, fail)
    it(`year's number`, fail)
  })

  it.skip('should apply different classes for dates displayed from prev & next month', fail)
  it.skip('should fill the missing cells in the month in the grid with dates from previous & next months', fail)
  it.skip(
    'should apply the selected style on a newly selected date & isActive style should still be on the original date',
    fail
  )

  describe.skip(`doesn't throw an error when`, () => {
    it(`saved is clicked`, fail)
    it(`cancel is clicked`, fail)
  })
})

describe.skip(`When some props are passed`, () => {
  it(`shows the passed date as the selected & active date`, fail)

  describe(`calls 'onSave' prop when save is clicked with`, () => {
    it(`the default date when there was no interaction(by default)`, fail)
    it(`selected date when a different date is selected`, fail)
  })

  it(`calls 'onCancel' prop when cancel is clicked `, fail)
})

describe.skip('From the grid, it can select a date from', () => {
  it('the previous month', fail)
  it('the next month', fail)
})

describe.skip(`On changing month`, () => {
  describe(`can navigate to`, () => {
    it(`previous month`, fail)
    it(`next month`, fail)
  })

  it(`the new dates are rendered on the grid`, fail)
  it(`the month name should change`, fail)
  it(`the year number should change`, fail)

  describe(`the year should change once we move to a month`, () => {
    it(`before Jan`, fail)
    it(`after Dec`, fail)
  })

  it(`should remember the date(s) that was selected & is active previously`, fail)
})