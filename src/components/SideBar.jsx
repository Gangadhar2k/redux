import React from 'react'
import "./SideBar.css"
import {useSelector} from 'react-redux';

const SideBar = () => {
const name = useSelector(state => state.user.name);
    
    const data = [
        { title: "Home Page" },
        { title: "Groups" },
        { title: "Lists" },
        { title: "Products" },
        { title: "Chats" },
        { title: "Photos" },
        { title: "Videos" },
        
    ];

    return (
        <div className='sidebar'>
            <div>
                {
                    data.map((opt) => (
                        <div className='option' key={opt.title}>
                            <p>{opt.title}</p>
                        </div>
                    ))
                }
                  <div className='option'>
                            <p>Logout ({name})</p>
                        </div>
            </div>
        </div>
    )
}

export default SideBar
