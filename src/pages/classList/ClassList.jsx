import React from 'react';
import ClassItem from '../../components/classItem/ClassItem';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './classList.scss'

const classesData = [
  { name: 'الصف الأول', section: 'Section 1', teacher: "mohamed mansor" },
  { name: 'الصف الثاني', section: 'شعبة 2', teacher: 'مدرس 2' },
  { name: 'الصف الثالث', section: 'شعبة 3', teacher: 'مدرس 3' },
  { name: 'الصف الأول', section: 'شعبة 1', teacher: 'مدرس 4' },
  { name: 'الصف الثاني', section: 'شعبة 2', teacher: 'مدرس 5' },
  { name: 'الصف الثالث', section: 'شعبة 3', teacher: 'مدرس 6' },
  { name: 'الصف الأول', section: 'شعبة 1', teacher: 'مدرس 7' },
  { name: 'الصف الثاني', section: 'شعبة 2', teacher: 'مدرس 8' },
  { name: 'الصف الثالث', section: 'شعبة 3', teacher: 'مدرس 9' },
];

function ClassList() {
  return (
    <div className='home'>
    <Sidebar />
    <div className='Container'>
      <Navbar />
      <div className='class-list'>
      <div className='test'>
      <h2>classes and categories...</h2>
        <Link to={`/classes/add`} className='add'>Add</Link>
       </div>
        <div className='zara'>
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
        </div>
      </div>
    </div>
  </div>
  );
}

export default ClassList;