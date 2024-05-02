import React, { useState, useEffect } from 'react';
import Goja from "../img/goja.jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';


// import io from 'socket.io-client';

// const socket = io('http://localhost:8000');

const Chat = ({ socket }) => {
  const { id, isGroup } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  let chatId;
  if (isGroup === 'undefined') {
    chatId = localStorage.getItem('chatId');
  } else {
    chatId = id;
  }

  // useEffect(()=>{
  //   socket.on('getMessageToRoom', (message) => {
  //     setMessages(prevMessages=> [...prevMessages,message]);
  //     console.log( message)

  //   });

  // },[])

    useEffect(() => {
    socket.on('getMessageToRoom', (data) => {
      const { message, name } = data;
      const newMessage = {
        text: message,
        name: name
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });
  }, [socket]);


  useEffect(() => {



   
    axios.post('http://localhost:8000/api/chat/getAllMessage', {
      groupId: chatId
    })
      .then(response => {
        console.log(response.data.messages)
        setMessages(response.data.messages);
      })
      .catch(error => {
        console.error(error);
      });

   
    // return () => {
    //   socket.off('getMessageToRoom');
    // };
  }, []);

  const handleSendMessage = () => {
    const Iduser = localStorage.getItem('Iduser');

    const newMessage = {
      text: inputValue,
      userId: Iduser,
      room: chatId
    };

    // setMessages(prevMessages => [...prevMessages, newMessage]);s 

    socket.emit('sendMessageToRoom', newMessage);

    

    axios.post('http://localhost:8000/api/chat/sendMessage', {
      message: inputValue,
      groupId: chatId,
      senderId: Iduser
    })
      .then(response => {
        // console.log(response.data)
        setInputValue('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
      </div>

      <div className='messages'>
        {messages.map((message) => (
          <div className='message' key={message.id}>
            <div className='messageInfo'>
              <img src={Goja} alt='' />
              <span>{message.text}</span>
              {/* <span>{message.firstName}</span> */}
            </div>
          </div>
        ))}
      </div>

      <div className='input'>
        <input type='text' placeholder='Type Something...' value={inputValue} onChange={handleInputChange} />
        <div className='sende'>
          <button className='but' onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
