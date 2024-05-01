import React from 'react';
import studentData from '../../components/studentcard/StudentCard'; // استيراد بيانات الطلاب من ملف خارجي
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './studentTable.scss'; // استيراد ملف SCSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MarkStudent = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
     <div className="cont">
     <div className='test'>
       <p>Marks of Student...</p>
       <Link to={`/studentTable/add`} className='add'>Add</Link>
       </div>
       
        <table className="ter">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Math</th>
              <th>English</th>
              <th>history</th>
              <th>Geographic</th>
              <th>phesick </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id} className="studentRow">
                <td className='tf'>
                  <Link to={`/studentTable/one`} ><img src={process.env.PUBLIC_URL + '/images/picture5.jpg'} alt='' className="studentImage" /></Link>
                  <span className='gre'>{student.name}</span>
                </td>
                <td>{student.id}</td>
                <td>{student.math}</td>
                <td >{student.english}</td>
                <td>{student.history}</td>
                <td >{student.geography}</td>
                <td>{student.physics}</td>
                
                <td><Link to={`/studentTable/edites`} className='edite'>Edit</Link></td>
                <td> <FontAwesomeIcon icon={faTrash} className='deleteIcon' /></td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
      </div>
    </div>
  );
};

export default MarkStudent;