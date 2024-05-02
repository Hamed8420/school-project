import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './classList.scss';

function ClassList() {
  const [classesData, setClassesData] = useState([]);



  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    axios.get('http://localhost:8000/api/class/AllClass',{
      headers: {
                  Authorization: `Bearer ${token}`
                }
    })
      .then(response => {
        setClassesData(response.data.allCalsses);

        console.log(response.data.allCalsses)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleDeleteClass = async (id) => {
    console.log(id)
    try {
      const token = localStorage.getItem('accessToken'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };


      await axios.delete(`http://localhost:8000/api/class/deleteClass/${id}`, config);
      setClassesData(classesData.filter(classData => classData.id !== id));
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className='home'>
      <Sidebar />
      <div className='Container'>
        <Navbar />
        <div className='class-list'>
          <div className='test'>
            <h2>All Classes...</h2>
            <Link to={`/classes/add`} className='add'>Add</Link>
          </div>
          <div className='zara'>
            {classesData.map((classData, index) => (
              <div className='tere' key={classData.id}>
                  <h2>{index + 1}</h2>
                  <Link to={`/classes/section/${classData.id}`}>
                  <div className='par'>
                    <p>{classData.name}</p>
                  </div>
                </Link>
                  <div>
                  
                  </div>

                  <div className='buttons'>
                    <button onClick={() => handleDeleteClass(classData.id)}>delete</button>
                    <Link to={`/classes/edites/${classData.id}`} className='edite'>Edit</Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassList;
