import React, { useState, useEffect } from 'react';
import './addGroup.css';
import axios from 'axios';

const GroupForm = () => {
  const [groupName, setGroupName] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/getUser/TEACHER');
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleGroupCreation = async () => {
    try {
      const formData = new FormData();
      console.log(selectedPeople)
      const Selectmap=JSON.stringify(selectedPeople)
      formData.append('groupName', groupName);
      formData.append('users', Selectmap);
      formData.append('image', selectedFile);
      

      await axios.post('http://localhost:8000/api/chat/createGroup', formData);

      console.log('Group Created Successfully!');
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  const handlePersonSelection = (event) => {
    const { options } = event.target;
    const selectedPeople = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedPeople(selectedPeople);
  };

  const handleFileSelection = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <h2>Create a Group</h2>
      <form>
        <div>
          <label htmlFor="file">Select File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileSelection}
          />
          <br></br>
          <label htmlFor="groupName">Group Name:</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="people">Select People:</label>
          <select
            multiple
            id="people"
            value={selectedPeople}
            onChange={handlePersonSelection}
          >
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
            ))}
          </select>
        </div>
        <div>
       
        </div>
        <button type="button" onClick={handleGroupCreation}>Create Group</button>
      </form>
    </div>
  );
};

export default GroupForm;