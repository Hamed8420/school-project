import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTeacher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/getUser/TEACHER')
      .then(response => {
        setData(response.data.users);
        console.log(response.data.users)
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="cont">
          <div className='test'>
            <p>All teachers...</p>
            {/* <Link to={"/users/new"} className='add'>Add</Link> */}
          </div>
          <table className="ter">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>School</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.email}</td>
                  <td>class two</td>
                  <td>tal karama</td>
                  <td className="ty">
                    <div className="cellAction">
                      <Link
                        to={`/users/${teacher.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="viewButton">View</div>
                      </Link>
                      <div
                        className="deleteButton"
                        // onClick={() => handleDelete(teacher.id)}
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
  );
};

export default AllTeacher;