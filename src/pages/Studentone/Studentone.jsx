import React from 'react';
import './studentOne.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const StudentGrades = () => {
    const name = "أحمد";
    const number = "12345";
    const mathGrade = 95;
    const historyGrade = 80;
    const geographyGrade = 90;
    const physicsGrade = 85;
    const scienceGrade = 88;

return (

    <div className='home'>
    <Sidebar />
    <div className='cantane'>
    <Navbar />
    
    
    <div className="student-grades">
        <h2>Student Information</h2>
        <p>Name: <span>{name}</span></p>
        <p>Number: <span>{number}</span></p>

        <h2>Grades</h2>
        <ul className="grades-list">
          <li>
            <p>Math:</p>
            <span>{mathGrade}</span>
          </li>
          <li>
            <p>History:</p>
            <span>{historyGrade}</span>
          </li>
          <li>
            <p>Geography:</p>
            <span>{geographyGrade}</span>
          </li>
          <li>
            <p>Physics:</p>
            <span>{physicsGrade}</span>
          </li>
          <li>
            <p>Science:</p>
            <span>{scienceGrade}</span>
          </li>
        </ul>
      </div>
    
    </div>
</div>
);
};

export default StudentGrades;