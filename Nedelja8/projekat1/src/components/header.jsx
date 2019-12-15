import React,{useEffect,useState} from 'react';
import {getInfo} from '../utility/space-x-service'
import { instanceOf } from 'prop-types';
const Header=(props)=>{
    let{name,founder,founded}=props
    const [header, setHeader] = useState({});

    useEffect(() => {
      getInfo()
        .then(data => {  setHeader(data) });
    }, []);


    return (
        <div>
            <h1>{name}</h1>
            <h1>{founder}</h1>
            <h1>{founded}</h1>


        </div>
    )
}
export default Header
