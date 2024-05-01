import './editLesson.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

const EditLesson = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const { id } = useParams();

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };


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
      formData.append('newFile', image);

      const response = await axios.put(`http://localhost:8000/api/lesson/updateLesson/${id}`, formData, config);

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
          <h2>Edit Lesson</h2>

          <div className='lessonEdit'>
            <input type='file' id='file-input' onChange={handleFileChange} />

            <label htmlFor='file-input'>Choose File</label>
          </div>

          <div className='gtr'>
            <h2>Name Lesson</h2>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button onClick={handleEditSubject}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditLesson;