import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillFutureYearsToArray } from '../utility/date-utility'
import{getUpcomingLaunches} from     '../utility/space-x-service'




const UpcomingLList= (props)=>{
    const [data, setUpcomingData] = useState([])
    const [displayData,setDisplayData]= useState(data)
    useEffect(()=>{
        getUpcomingLaunches().then(data=>{
            setUpcomingData(data);
          })
    })

    const handleChange=(e)=>{
        console.log("Hello")
        console.log(e.target.value);
        setDisplayData(data.filter(x=>{return x.launch_year==e.target.value}));
    }
    return (
        <>
        <DataYearFilter handleChange={handleChange} fillYearsToArray={fillFutureYearsToArray}/>
        <LaunchList data={displayData}/>
        </>
    );
}

export default UpcomingLList;