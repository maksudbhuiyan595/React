import React from 'react'

export const SingleUser = (props) => {
//    console.log(SingleData)
const {name,phone,email,website,company}=props.SingleData
  return (
    <div>
        <p>Name: {name}</p>
        <p>Website: {website}</p>
        <p>Company: {company.name}</p>
    </div>
  )
}
