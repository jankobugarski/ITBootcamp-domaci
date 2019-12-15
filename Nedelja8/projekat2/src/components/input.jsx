import React, { useState } from 'react'



export default function Input() {
    const [user, setuser] = useState({ name: '', phone: '' })
    // const [users, setusers = useState({name:'',phone:''})



    return (
        <div>
            <input className='ime' type='text' value={user.name} onChange={e => {
                setuser({
                    name: e.target.value, phone: user.phone
                })
            }} ></input>
            <input className='broj' type='number' value={user.phone} onChange={e => 
            setuser({ name: user.name, phone: e.target.value })
             } ></input>
            <input className='dugme' type='submit' onClick={console.log(user)}></input>
            

        </div>
    )
}
