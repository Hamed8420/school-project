import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';
function ClassSection() {
  const [sections, setSections] = useState([]);
  const { Idclass } = useParams();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/section/allSections',
          { classId: Idclass },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSections(response.data.sections);
        console.log(response.data.sections)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [Idclass, token]);


  const deleteSection = async (sectionId) => {
    try {
      await axios.delete(`http://localhost:8000/api/section/deleteSection/${sectionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // تحديث القسم المحذوف في الواجهة الرسومية
      setSections(sections.filter(section => section.id !== sectionId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='Container'>
        <Navbar />
        <div className='class-list'>
          <div className='test'>
            <h2>All Section...</h2>
            <Link to={`/classes/section/${Idclass}/add`} className='add'>Add</Link>
          </div>
          <div className='zara'>
            {sections.map((section, index) => (
              <div className='tere' key={section.id}>
                  <h2>{index + 1}</h2>
                  <div className='par'>
                    <p>{section.sectionNumber}</p>
                    <p>{section.maxNumberOfStudent}</p>
                  </div>

                  <div className='pare'>
                   <Link to={`/classes/timetable`}> Schedule</Link>
                   <Link to={`/classes/section/${Idclass}/lessons/${section.id}`}>AllSubjects</Link>
                  </div>
              
                  <div className='buttons'>
                    <button onClick={() => deleteSection(section.id)}>delete</button>
                    <Link to={`/classes/section/${Idclass}/edites/${section.id}`} className='edite'>Edit</Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassSection;