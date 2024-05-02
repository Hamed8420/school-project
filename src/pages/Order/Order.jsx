import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './order.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const { Idnot } = useParams();
  console.log(Idnot)

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    
    axios.get(`http://localhost:8000/api/request/${Idnot}/allRequest`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setStudents(response.data.requests);
        console.log(response.data.requests)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDeleteRequest = (studentId) => {
    const token = localStorage.getItem('accessToken');
    
    axios.delete(`http://localhost:8000/api/request/deleteRequest/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
 
        setStudents(students.filter(student => student.id !== studentId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleStatusUpdate = (studentId, status) => {
    const token = localStorage.getItem('accessToken');
    const data = {
      status: status
    };

    axios.put(`http://localhost:8000/api/request/changeStatus/${studentId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        
  
        const updatedStudents = students.map(student => {
          if (student.id === studentId) {
            return {
              ...student,
              status: status
            };
          }
          return student;
        });
        setStudents(updatedStudents);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="conte">
          <div className='test'>
            <p>Marks of Student...</p>

            <button>All</button>
            <button>acceptable</button>
            <button>unacceptable</button>
            <button>UnthinkRequest</button>


            <Link to={`/notifcation/order/${Idnot}/add`} className='add'>Add</Link>
          </div>

          <table className="tere">
            <thead>
              <tr>
                <th>firstName</th>
                <th>Last Name</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.User.id} className="student">
                
                  <td>
                    <span className='gre'>{student.User.firstName}</span>
                  </td>
                  <td>{student.User.lastName}</td>
                  <td>{student.lenght}</td>
                  <td>{student.weight}</td>
                  <td>class A</td>
                  <td><Link to={`/notifcation/order/${Idnot}/edites/${student.id}`} className='edite'>Edit</Link></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className='deleteIcon'
                      onClick={() => handleDeleteRequest(student.id)}
                    />
                  </td>
                  <td>
                    <button
                      className='acceptable'
                      onClick={() => handleStatusUpdate(student.id, 'acceptable')}
                    >
                      Acceptable
                    </button>
                  </td>
                  <td>
                    <button
                      className='unacceptable'
                      onClick={() => handleStatusUpdate(student.id, 'unacceptable')}
                    >
                      Unacceptable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;