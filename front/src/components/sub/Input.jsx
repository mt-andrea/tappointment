import React from 'react'

export const Input = (props) => {
  return (
    <div>
        <input className='form-control p-1 m-3 w-75' id={props.id} name={props.id} value={props.value} onChange={props.change} type={props.type} />
    </div>
  )
}
