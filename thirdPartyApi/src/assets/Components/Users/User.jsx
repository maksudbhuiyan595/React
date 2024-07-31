import React, { useEffect, useState } from 'react'
import { SingleUser } from '../SingleUser/SingleUser'

export const User = () => {
    const [allData, setAllData]=useState([])
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setAllData(data)) 
    },[])
  return (
    <div>
        <p>Users: {allData.length}</p>
        {allData.map(SingleData=> 
            <SingleUser
            key={SingleData.id}
            SingleData={SingleData}
            ></SingleUser>
        )}
    </div>
  )
}

