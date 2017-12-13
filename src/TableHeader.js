import React from 'react'

let days=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
export default class TableHeader extends React.Component{
    render(){
        return(
            <thead>
            <tr>
                {days.map((day,index)=><td key={index}>{day}</td>)}
            </tr>
            </thead>  
        );
    }
}