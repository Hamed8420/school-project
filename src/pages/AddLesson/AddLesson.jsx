    // import './addLesson.scss'
    // import Sidebar from '../../components/sidebar/Sidebar';
    // import Navbar from '../../components/navbar/Navbar';

    // const AddLesson = () => {


    // return (
    
    //     <div className='home'>
    //     <Sidebar />
    //     <div className='cantana'>
    //     <Navbar />
        
        
    //     <div className='edit'>
    //     <h2>Add Lesson</h2>

    //     <div className='lessonEdit'>
    //     <input type="file" id="file-input" multiple/>

    //     <label for="file-input">
    //     Choose File
    // </label>
    
    //     </div>

    //     <div className='gtr'>
    //     <h2>Name Lesson</h2>
    //     <input type="text" id="name" />
    //     </div>
    //     <button>ADD</button>
    //     </div>
        
    //     </div>
    // </div>
    // );
    // };

    // export default AddLesson;


    import React, { useState } from 'react';
    import axios from 'axios';
    import './addLesson.scss';
    import Sidebar from '../../components/sidebar/Sidebar';
    import Navbar from '../../components/navbar/Navbar';
    import { useParams } from 'react-router-dom';
    
    const AddLesson = () => {
      const [name, setName] = useState('');
      const [selectedImage, setSelectedImage] = useState(null);
      const { id } = useParams();
    //   console.log(id)
    
      const token = localStorage.getItem('accessToken');
    
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
      };
    
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleAddLesson = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('file', selectedImage);
    
        try {
          const response = await axios.post(`http://localhost:8000/api/lesson/addLesson/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div className='home'>
          <Sidebar />
          <div className='cantana'>
            <Navbar />
            <div className='edit'>
              <h2>Add Lesson</h2>
    
              <div className='lessonEdit'>
                <input type='file' id='image-input' onChange={handleImageChange} />
    
                <label htmlFor='image-input'>Choose Image</label>
              </div>
    
              <div className='gtr'>
                <h2>Name Lesson</h2>
                <input type='text' id='name' value={name} onChange={handleNameChange} />
              </div>
              <button onClick={handleAddLesson}>ADD</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default AddLesson;