import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './allsubject.css'

import axios from 'axios';

const Subject = () => {


  const [subjects, setsubjects] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/api/subject/getAllSubject')
      .then(response => {
        setsubjects(response.data.subjects);

        console.log(response.data.subjects)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleDeleteSubject = async (id) => {
    try {
      const token = localStorage.getItem('accessToken'); // استحضار رمز المصادقة من localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // إضافة رمز المصادقة إلى رأس الطلب
        },
      };


      await axios.delete(`http://localhost:8000/api/subject/deleteSubject/${id}`, config);
      setsubjects(subjects.filter(subject => subject.id !== id));
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
      <h2>All Subjects...</h2>
        <Link to={`/lessons/adde`} className='add'>Add</Link>
       </div>
        {/* <div className='zara'>
          {classesData.map((classData, index) => (
      <Link to="/classes/timetable" style={{ textDecoration: "none" }}>
      <ClassItem
        key={index}
        name={classData.name}
        section={classData.section}
        teacher={classData.teacher}
      />
    </Link>
          ))}
        </div> */}

 <div className='zar'>
     {subjects.map(lesson => (
          <li key={lesson.id} className='gero'>
            <Link to={`/lessons/lesson/${lesson.id}`}>
            <img src={`http://localhost:8000/${lesson.image}`} alt={lesson.name} />
            </Link>
      <div className='tu'>
      <p className='h2'><span>Lesson name: </span>{lesson.name}</p>
            <p className='h2'><span>minimumSuccess :</span>{lesson.minimumSuccess}</p>
            <p className='h2'><span>teacher:</span> {lesson.teacher} mohamed</p>
            <p>
                  <Link to={`/lessons/quessub/${lesson.id}`}>Question</Link>
                </p>
      </div>

      <div className='buttons'>
      <button onClick={() => handleDeleteSubject(lesson.id)}>Delete</button>
        <Link to={`/lessons/edites/${lesson.id}`} className='edite'>
                Edit
              </Link>
      </div>
          </li>
          
        ))}
      </div >

      </div>
    </div>
  </div>
  );
};

export default Subject;