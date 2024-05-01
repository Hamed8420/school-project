import React from 'react';
import { Link } from 'react-router-dom';
import './timetable.scss';
import DayColumn from "../../components/dayColumn/DayColumn";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from '../../components/datatable/AllTeacher';

function Timetable() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

  const handleEdit = () => {
    // Logic for handling the edit action
    // Redirect to the edit page or open a modal, etc.
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="content">
        <Navbar />
    <div className="tera">
    <div className="table">
          <table className="tr">
            <thead className="td">
              <tr>
                <th>Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            
            <tbody className="ts">
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td>{time}</td>
                  {daysOfWeek.map((day) => (
                    <td key={day}>
                      <DayColumn day={day} time={time} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="edit-button">
          <Link to="/edit">Edit Timetable</Link>
          {/* أو يمكنك استخدام زر الـ Button مع دالة onClick */}
          {/* <button onClick={handleEdit}>Edit Timetable</button> */}
        </div>
        <Datatable/>
    </div>
      </div>
    </div>
  );
}

export default Timetable;