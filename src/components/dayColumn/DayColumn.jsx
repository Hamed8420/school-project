import React from 'react';
import './dayColumn.scss';

function DayColumn({ day, time }) {
  const subjects = [['Math',['class 6'],['Marwa']], 
  ['Science',['class4'],['khaled']],
   ['English',['class2'],['mohamed']],
    ['History','class1','Ahmed']];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

  return (
    <div className="day-column">
      {/* <h3>{day}</h3> */}
      {/* <p>{time}</p> */}
      {/* <p className="subject">{randomSubject}</p> */}
      <p className="subject">
        {randomSubject.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </p>
    </div>
  );
}

export default DayColumn;