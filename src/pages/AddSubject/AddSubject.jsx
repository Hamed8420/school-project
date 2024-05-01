import React, { useState } from 'react';
import axios from 'axios';
// import { createBrowserHistory } from 'history';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddSubject = () => {
    const [name, setName] = useState('');
    const [minimumSuccess, setMinimumSuccess] = useState('');
    const [image, setImage] = useState(null);

     const handleAddSubject = async () => {
    try {
      const token = localStorage.getItem('accessToken'); // استحضار رمز المصادقة من localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = new FormData();
      formData.append('name', name);
      formData.append('minimumSuccess', minimumSuccess);
      formData.append('teacherId', '6');
      formData.append('image', image);

      const response = await axios.post('http://localhost:8000/api/subject/addSubject', formData, config);
      console.log(response.data); // تعامل مع الاستجابة هنا
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantana'>
        <Navbar />

          <div className='edit'>
      <h2>Add Subject</h2>

      <div className='lessonEdit'>
        <input type="file" id="file-input" multiple onChange={handleFileChange} />
        <label htmlFor="file-input">Choose File</label>
      </div>

      <div className='gtr'>
        <h2>Name Subject</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='gtr'>
        <h2>Minimum Success</h2>
        <input type="text" value={minimumSuccess} onChange={(e) => setMinimumSuccess(e.target.value)} />
      </div>

      <button onClick={handleAddSubject}>ADD</button>
    </div>

      </div>
    </div>
  );
};

export default AddSubject;