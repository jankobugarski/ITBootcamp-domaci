  import React,{useEffect,useState} from 'react'
  import {getRoadster}from '../utility/space-x-service'
  
  const Footer=(props)=>{
      let{name,orbit_type,details}=props;
      const [data, setData] = useState({});
      useEffect(() => {
        getRoadster().then(data => {
            setData(data);
            
        },[])
    })

    return(
        <Footer> Name:{name} Orbit_type:{orbit_type} Details:{details}</Footer>
    )
}
export default Footer