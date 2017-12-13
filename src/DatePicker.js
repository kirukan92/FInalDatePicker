import React from 'react'

export default class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.getInitialvalues=this.getInitialvalues.bind(this);
        this.renderData=this.renderData.bind(this);
        this.mapValues=this.mapValues.bind(this);
        this.state={data:this.getInitialvalues(),calendarDates:[],activeDate:this.getInitialvalues().defaultDate,RowCount:42}
    }

    getInitialvalues(){
        let now=new Date();
        var PreviousDate=new Date(now.getFullYear(),now.getMonth(),0).getDate();
        var PreviousDay=new Date(now.getFullYear(),now.getMonth(),0).getDay();
        var currentMonthLastDate=new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        var defaultDate=now.getDate();
        console.log(defaultDate);
        return {now,PreviousDate,PreviousDay,currentMonthLastDate,defaultDate};
    }

    getDate(event,val){
        event.preventDefault();
        alert(val)
    }

    renderData(){
        let Date=this.state.data.PreviousDate-this.state.data.PreviousDay;
        for(var i=this.state.data.PreviousDate;i>=Date;Date++){ 
            if(Date<=this.state.data.PreviousDate){
                this.state.calendarDates.push(<td className="prevDate">{Date}</td>);
            }
        }
        var cmd=Array.from(Array(this.state.data.currentMonthLastDate).keys());
        cmd.map((val)=>{return (this.state.data.defaultDate===val+1)? this.state.calendarDates.push(<td className="defaultDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>):
                        this.state.calendarDates.push(<td className="currentDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>)});
        var nextDateValues=this.state.RowCount-this.state.calendarDates.length;

        var lastDate=Array.from(Array(nextDateValues).keys());
        lastDate.map((val,index)=>this.state.calendarDates.push(<td className="nextDate" onClick={(e)=>this.getDate(e,val+1)}>{val+1}</td>))

        return this.state.calendarDates;
    }

    mapValues(){
        this.renderData();
        var tempData=[];
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