import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillYearsToArray } from '../utility/date-utility'
import {getRoadster} from    '../utility/space-x-service'

import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillYearsToArray } from '../utility/date-utility'
import{getPastLaunches} from '../utility/space-x-service'




// const RoadsterList = ( props ) => {
//     const [data, setData] = useState([])
//     const [displayData, setDisplayData] = useState(data)
   

    
    
//     return (
//         <>
//             <RoadsterList name={name}></RoadsterList>
//         </>
//     );
// }

// export default PastLList;