import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Gojo from '../img/gojo.jfif';
import Gjo from "../img/gjo.jpg";
// import io from 'socket.io-client';

const Iduser = localStorage.getItem('Iduser');

const Chats = ({socket}) => {
  // const socket = io('http://localhost:8000');
  const [userData, setUserData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [joinRoomMessage, setJoinRoomMessage] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected fdklsf ");
    });

    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/getUser/TEACHER');
        setUserData(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/chat/getAllGroup')
      .then(response => {
        const groupsData = response.data.groups;
        setGroups(groupsData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleJoinRoom = async (userId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/chat/createSingleChat', {
        senderId: Iduser,
        reciverId: userId
      });
      const chatId = response.data.chat.id;
      socket.emit('enterRoom', { sender: Iduser, receiver: userId });
      localStorage.setItem('chatId', chatId);
      console.log('Chat created:', chatId);
      setJoinRoomMessage('User joined the room successfully!');
    } catch (error) {
      console.error('Failed to create chat:', error);
    }
  };

  const handleJoinGroup = async (groupId) => {
    socket.emit('enterRoom', { chatId: groupId ,userId:Iduser});
    setJoinRoomMessage('User joined the room successfully!');
  };

  return (
    <div>
      <div className='searche'>
        {groups.map((group, index) => (
          <Link to={`/chat/chats/${group.id}/${group.isGroup}`} key={index}>
            <div className='userChat' key={group.id} onClick={() => handleJoinGroup(group.id)}>
              <img src={Gjo} alt="غوجو" />
              <div className='userChatInfo'>
                <span>{group.groupName}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {userData.filter(user => user.id != Iduser).map((user, index) => (
        <Link to={`/chat/chats/${user.id}/${user.isGroup}`} key={index}>
          <div className='userChat' onClick={() => handleJoinRoom(user.id)}>
            <img src={Gojo} alt='' />
            <div className='userChatInfo'>
              <span>
                {user.firstName} <span>{user.lastName}</span>
              </span>
            </div>
          </div>
          {joinRoomMessage && <p>{joinRoomMessage}</p>}
        </Link>
      ))}
    </div>
  );
};

export default Chats;