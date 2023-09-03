import React from 'react'
import "./Update.css"
import {useSelector} from 'react-redux';
const Update = () => {
const name = useSelector(state => state.user.name);


  return (
    <div className='update'>
      <h1>UPDATE YOUR ACCOUNT</h1>
      <div className='warning'>
        <h6>Deleting Your Account Cannot be undone <span>{name}</span> you should Confirm before delete</h6>
      </div>

      <button className='btn-delete'>Delete</button>

    </div>
  )
}

export default Update