import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebare from '../../compon/Sidebare';
// import Chat from '../../compon/Chat';


const Home = ({ socket }) => {
  

  return (
    <div className='homeee'>
      <div className='contain'>
        
          <Sidebare socket={socket}/>
          
       
      </div>
    </div>
  );
};

export default Home;