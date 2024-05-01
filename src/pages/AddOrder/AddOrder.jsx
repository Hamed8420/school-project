import React, { useState } from 'react';
import axios from 'axios';
import './addOrder.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const AddOrder = () => {
  const { Idnot } = useParams();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleAddOrder = () => {
    const token = localStorage.getItem('accessToken');
    const data = {
        length: height,
      weight: weight
    };

    axios.post(`http://localhost:8000/api/request/${Idnot}/addRequest`, data, {
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
          <h2>Add Order</h2>

          <div className='gtr'>
            <p>Height student</p>
            <input type="text" className='tgr' value={height} onChange={e => setHeight(e.target.value)} />
            <p>Weight student</p>
            <input type="text" className='tgr' value={weight} onChange={e => setWeight(e.target.value)} />
          </div>
          <button onClick={handleAddOrder}>ADD</button>
        </div>

      </div>
    </div>
  );
};

export default AddOrder;