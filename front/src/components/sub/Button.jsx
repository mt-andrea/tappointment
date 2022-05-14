import React from 'react'

export const Button = (props) => {
  return (

    <button className='form-control btn btn-success m-3 w-25' onClick={props.onClick} value={props.value}>{props.value}</button>
  )
}
