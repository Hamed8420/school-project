import React from 'react';
import {Link} from 'react-router-dom'

import { createBrowserHistory } from 'history';
import axios from 'axios'

import './login.css';

const Login = () => {
  const history = createBrowserHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
  
    const data = {
      email: email,
      password: password
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', data);
      console.log(response.data);
  
      if (response.status === 200) {
        const token = response.data.accessToken;
        const refreshToken = response.data.refershToken;
        const Iduser = response.data.user.id;
  
        localStorage.setItem('accessToken', token);
        localStorage.setItem('refershToken', refreshToken);
        localStorage.setItem('Iduser', Iduser);
  
        const userRole = response.data.user.role;
  
        if (userRole === 'STUDENT') {
          history.push('/use');
        } else if (userRole === 'ADMIN') {
          history.push('/');
        } else if(userRole === 'TEACHER'){
          history.push('/');
        } else {
          console.error('Invalid user role');
        }
      } else {
        console.error('Login request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className='form-container'>
    <div className='myweb'>
        Welcom in our WebSite
    </div>
<form  className="form" onSubmit={handleSubmit}>
      <div className='test'>
        <label>Email Address</label>
        <input
        type="email" name='email' placeholder="Enter Your Email Address" required/>
      </div>

      <div className='test'>
        <label>Password</label>
        <div    >
          <input type='password' name='password' placeholder="Enter password" required />
          <button type="button"  className="show-button">
            Show
          </button>
        </div>
      </div>

      <button type="submit" className='Log' >
     Login
      </button>
      <div className='go'>
        <p> Do you not have an account</p>
       <div className='link'>
       <p>Create an account</p>
        <li>
        <Link to='/use/signup'>SignUp</Link>
        </li>
       </div>
      </div>

    </form>
</div>

  );
};

export default Login;