import React, { useState } from 'react';
import axios from 'axios';
// import './addOrder.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddClass = () => {
  const [name, setName] = useState('');

  const handleAddClass = () => {
    const token = localStorage.getItem('accessToken');
    const data = {
        name: name,
     
    };

    axios.post(`http://localhost:8000/api/class/addClass`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
       
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantana'>
        <Navbar />

        <div className='addstudent'>
          <h2>Add Class</h2>

          <div className='gtr'>
            <p>name Classt</p>
            <input type="text" className='tgr' value={name} onChange={e => setName(e.target.value)} />
            
          </div>
          <button onClick={handleAddClass}>ADD</button>
        </div>

      </div>
    </div>
  );
};

export default AddClass;