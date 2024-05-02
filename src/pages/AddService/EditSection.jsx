import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const EditSection = () => {
  const { Idclass, Idsection } = useParams();
  const [sectionNumber, setSectionNumber] = useState('');

  const editSection = () => {
    const token = localStorage.getItem('accessToken');
    const data = {
      classId: Idclass,
      sectionNumber: sectionNumber
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.put(`http://localhost:8000/api/section/updateSection/${Idsection}`, data, config)
      .then(response => {
        console.log(response.data); // تعامل مع الاستجابة هنا
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
          <h2>Edit Section</h2>

          <div className='gtr'>
            <h2>Section number</h2>
            <input
              type="number"
              id="sectionNumber"
              value={sectionNumber}
              onChange={event => setSectionNumber(event.target.value)}
            />
          </div>
          <button onClick={editSection}>Edit</button>
        </div>

      </div>
    </div>
  );
};

export default EditSection;