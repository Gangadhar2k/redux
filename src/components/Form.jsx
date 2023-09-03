import React, { useState } from 'react'
import './Form.css'
import {useSelector,useDispatch} from 'react-redux';
import { update } from '../Redux/userSlice';

const Form = () => {


const user = useSelector(state => state.user);

const [name,setName] = useState('')
const [email,setEmail] = useState('')

const dispatch = useDispatch();

const handleUpdate=(e)=>{
e.preventDefault();
dispatch(update({name,email}))
}


  return (
    <div className='form'>


            <h3>Enter Your Details</h3>
        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type='text' className='input-box' placeholder={user.name} id='name'
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='mail' className='input-box' placeholder={user.email} id='email' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type='text' className='input-box' placeholder='Enter Password' id='pass'/>
            </div>

                <button type='submit' className='btn-submit' onClick={handleUpdate}>Submit</button>
        </form>
    </div>
  )
}

export default Form