import React from 'react'

let days=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
export default class TableHeader extends React.Component{
    render(){
        return(
            <thead>
            <th>
                {days.map((day,index)=><td key={index}>{day}</td>)}
            </th>
            </thead>  
        );
    }
}
