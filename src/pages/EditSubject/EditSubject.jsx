
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const EditSubject = () => {
  const { id ,Idclass} = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);



  const handleEditSubject = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);
      formData.append('ClassId',Idclass)

      const response = await axios.put(`http://localhost:8000/api/subject/updateSubject/${id}`, formData, config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    setImage(event.target.files[0]);
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantana'>
        <Navbar />

        <div className='edit'>
          <h2>Edit Subject</h2>

          <div className='lessonEdit'>
            <input type="file" id="file-input" multiple onChange={handleFileChange} />
            <label htmlFor="file-input">Choose File</label>
          </div>

          <div className='gtr'>
            <h2>Name Subject</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <button onClick={handleEditSubject}>Edit</button>
        </div>

      </div>
    </div>
  );
};

export default EditSubject;