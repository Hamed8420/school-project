import React from 'react';
import { useState } from 'react';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './main.scss'
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=10')
        .then(res => setData(res.data.items))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div className="cover">
       <div className="header">
   
   <div className="row2">
     <h2>Find Your Book...</h2>
     <div className="search">
       <input
         type="text"
         placeholder="Enter Your Book Name"
         value={search}
         onChange={e => setSearch(e.target.value)}
         onKeyPress={searchBook}
       />
       <button onClick={searchBook}>Search</button>
     </div>
     {/* <img src="../../../public/images/pictur 2.jpg" alt="" /> */}
   </div>

          <div className="row1">
     <h1>Before you give up<br /> think about why you fought for so long
​</h1>
   </div>
 </div>
 <div className="container">

  <Card book={bookData}></Card>
 </div>
       </div>
      </div>
    </div>
  )
}

export default Main;

