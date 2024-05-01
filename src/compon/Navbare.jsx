import React from 'react'
import Gjo from '../img/gjo.jpg'
import { Link } from 'react-router-dom'

const Navbare = () => {
  return (
    <div className='navbare'>
{/* <span className='logo'> lama Chat</span> */}
<div className='user'>
  <img src={Gjo} alt=''/>
  <span>Jhon</span>
  <Link to={`/chat/adde`} className='add'>Add</Link>
</div>
    </div>
  )
}

export default Navbare