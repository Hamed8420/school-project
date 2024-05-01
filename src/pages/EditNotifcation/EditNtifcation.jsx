import React, { useState } from 'react';
import axios from 'axios';
import './editNotifcation.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const EditNotifcation = () => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { Idnot } = useParams();
  console.log(Idnot);

  const handleEditSubject = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        title: name,
        description: description,
        startDate: startDate,
        endDate: endDate
      };



      const response = await axios.put(`http://localhost:8000/api/effectiveness/updateEffectiveness/${Idnot}`, data, config);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="home">
      <Sidebar />
      <div className="cantana">
        <Navbar />

        <div className="efitnote">
          <h2>Edit Notifcation</h2>

          <div className="lessonEdit">
            <input type="file" id="file-input" multiple />

            <label htmlFor="file-input">Choose File</label>
          </div>

          <div className="gtr">
            <div>
              <p>Name Active</p>
              <input type="text" className="tgr" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <p>date of start</p>
            <input type="date" className="tgr" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <p>date of end</p>
            <input type="date" className="tgr" value={endDate} onChange={e => setEndDate(e.target.value)} />
            <p>Explain</p>
            <input
              type="text"
              className="tgr"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button onClick={handleEditSubject}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditNotifcation;