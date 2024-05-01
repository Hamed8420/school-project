import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const AllStudent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/getUser/STUDENT')
      .then(response => {
        setData(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <div className="home">
          <div className="homeContainer">
            <div className="cont">
              <div className='test'>
                <p>All Student...</p>
                {/* <Link to={"/users/new"} className='add'>Add</Link> */}
              </div>
              <table className="ter">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Father</th>
                    <th>Mother</th>
                    <th>Class</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((student) => (
                    <tr key={student.id}>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.midelName}</td>
                      <td>Maria</td>
                      <td>Class One</td>
                      <td>{student.email}</td>
                      <td className="ty">
                        <div className="cellAction">
                          <Link
                            to={`/users/${student.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <div className="viewButton">View</div>
                          </Link>
                          <div
                            className="deleteButton"
                            // onClick={() => handleDelete(student.id)}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudent;