import React from 'react'

export default class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.renderData=this.renderData.bind(this);
        this.mapValues=this.mapValues.bind(this);
        this.state={calendarDates:[],RowCount:42,activeDate:2}
    }

    getDate(event,val){
        event.preventDefault();
        this.setState({activeDate:val},()=>{console.log(this.state.activeDate)});
    }

    renderData(){
        let Date=this.props.data.PreviousDate-this.props.data.PreviousDay;
        for(let i=this.props.data.PreviousDate;i>=Date;Date++){ 
            if(Date<=this.props.data.PreviousDate){
                this.state.calendarDates.push(<td className="prevDate" value={Date}>{Date}</td>);
            }
        }
        let cmd=Array.from(Array(this.props.data.currentMonthLastDate).keys());
        cmd.map((val)=>{return (this.props.data.defaultDate===val+1)? this.state.calendarDates.push(<td className="defaultDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>):
                        this.state.calendarDates.push(<td className="currentDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>)});
        let nextDateValues=this.state.RowCount-this.state.calendarDates.length;
    
        let lastDate=Array.from(Array(nextDateValues).keys());
        lastDate.map((val,index)=>this.state.calendarDates.push(<td className="nextDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>))

        return this.state.calendarDates;
    }

    mapValues(){
        this.renderData();
        let tempData=[];
        this.state.calendarDates.forEach((item)=>{
            if(this.state.calendarDates.length){
                tempData.push(this.state.calendarDates.splice(0,7));
            }
        })
        console.log(tempData);
        return tempData.map((data,index)=>{ return <tr key={index}>{data.map((tdval,index)=>tdval)}</tr>})
        }
        
    render(){
        return(
            <tbody>{this.mapValues()}</tbody>
        );
    }
}