import React from 'react'
import './Navbar.css'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const name = useSelector(state => state.user.name);
  return (
    <div className='navbar'>
        <div className='logo'><h1>Redux</h1></div>
        <div className='menu'>
           <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} alt="img" srcset="" />
           <p>{name}</p>
        </div>
    </div>
  )
}

export default Navbar