// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Navbar from '../../components/navbar/Navbar';

// const EditSubject = () => {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);

//   const location = useLocation();

//   useEffect(() => {
//     const pathname = location.pathname;
//     const id = pathname.substring(pathname.lastIndexOf('/') + 1);
//     setId(id);
//   }, [location]);

//   const handleEditSubject = async () => {
//     try {
//       const token = localStorage.getItem('accessToken'); // استحضار رمز المصادقة من localStorage
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`, // إضافة رمز المصادقة إلى رأس الطلب
//         },
//       };

//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('image', image);

//       const response = await axios.put(`http://localhost:8000/api/subject/updateSubject/${id}`, formData, config);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <div className='home'>
//       <Sidebar />
//       <div className='cantana'>
//         <Navbar />

//         <div className='edit'>
//           <h2>Edit Subject</h2>

//           <div className='lessonEdit'>
//             <input type="file" id="file-input" multiple onChange={handleFileChange} />
//             <label htmlFor="file-input">Choose File</label>
//           </div>

//           <div className='gtr'>
//             <h2>Name Subject</h2>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//           <button onClick={handleEditSubject}>Edit</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EditSubject;





import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const EditSubject = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

//   useEffect(() => {
//     const fetchSubject = async () => {

//       try {
//         const token = localStorage.getItem('accessToken');
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
// console.log(id)
//         const response = await axios.get(`http://localhost:8000/api/subject/getSubject/${id}`, config);
//         const subject = response.data.subject;

//         setName(subject.name);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubject();
//   }, [id]);

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