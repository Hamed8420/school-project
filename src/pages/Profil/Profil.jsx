import React, { useState } from 'react';
import './profile.css';

const Profil = () => {
  const [showDetails, setShowDetails] = useState(false);

  const person = {
    name: 'اسم الشخص',
    nickname: 'كنية الشخص',
    phoneNumber: 'رقم الهاتف',
    address: 'عنوان السكن',
    description: 'وصف الشخص'
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile">
      <div className="left">
        <img src="/path/to/person-image.jpg" alt="صورة الشخص" />
      </div>
      <div className="right">
        <h2>{person.name}</h2>
        {showDetails && (
          <>
            <p>الكنية: {person.nickname}</p>
            <p>رقم الهاتف: {person.phoneNumber}</p>
            <p>عنوان السكن: {person.address}</p>
            <p>وصف: {person.description}</p>
          </>
        )}
        <button onClick={toggleDetails}>
          {showDetails ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
        </button>
      </div>
    </div>
  );
}

export default Profil;