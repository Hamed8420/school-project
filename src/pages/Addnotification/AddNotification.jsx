import React, { useState } from 'react';
import axios from 'axios';
import './addNotifcation.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddNotifcation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddNotification = () => {
    const token = localStorage.getItem('accessToken');

    const data = {
        title: name,
        description: description,
        startDate: startDate,
      endDate: endDate
    };

    axios
      .post('http://localhost:8000/api/effectiveness/addEffectiveness', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('تمت إضافة الإشعار بنجاح:', response.data);
   
      })
      .catch(error => {
        console.log('حدث خطأ أثناء إضافة الإشعار:', error);
    
      });
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantana'>
        <Navbar />
        <div className='efitnote'>
          <h2>Add Notifcation</h2>
          <div className='lessonEdit'>
            <input type='file' id='file-input' multiple />
            <label htmlFor='file-input'>Choose File</label>
          </div>
          <div className='gtr'>
            <div>
              <p>Name Active</p>
              <input type='text' className='tgr' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <p>date of start</p>
            <input type='date' className='tgr' value={startDate} onChange={e => setStartDate(e.target.value)}/>
            <p>date of end</p>
            <input type='date' className='tgr' value={endDate} onChange={e => setEndDate(e.target.value)} />
            <p>Explain</p>
            <input type='text' className='tgr' value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <button onClick={handleAddNotification}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddNotifcation;