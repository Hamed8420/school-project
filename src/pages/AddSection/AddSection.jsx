import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddSection = () => {
  const { Idclass } = useParams();
  const [maxNumberOfStudent, setMaxNumberOfStudent] = useState('');
  const [sectionNumber, setSectionNumber] = useState('');

  const addSection = () => {
    const token = localStorage.getItem('accessToken');
    const data = {
      classId: Idclass,
      maxNumberOfStudent: maxNumberOfStudent,
      sectionNumber: sectionNumber
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.post('http://localhost:8000/api/section/addSection', data, config)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantana'>
        <Navbar />
        <div className='edits'>
          <h2>Add Section</h2>
          <div className='gtr'>
            <h2>Max number of student</h2>
            <input
              type="number"
              id="maxNumberOfStudent"
              value={maxNumberOfStudent}
              onChange={event => setMaxNumberOfStudent(event.target.value)}
            />
          </div>
          <div className='gtr'>
            <h2>Section number</h2>
            <input
              type="text"
              id="sectionNumber"
              value={sectionNumber}
              onChange={event => setSectionNumber(event.target.value)}
            />
          </div>
          <button onClick={addSection}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddSection;