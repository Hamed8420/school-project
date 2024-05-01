import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signup.css';

const SignUp = () => {

//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleClick = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!email || !password) {
//       alert('Please fill in all fields');
//       setLoading(false);
//       return;
//     }



//     setLoading(false);
//   };

//   const handleGuestCredentials = () => {
//     setEmail('guest@example.com');
//     setPassword('123456');
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const firstName = e.target.elements.firstName.value;
  const midelName = e.target.elements.midelName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  const confirmPassword = e.target.elements.confirmPassword.value;
  const role = e.target.elements.role.value;
  
  if (!firstName || !lastName || !midelName || !email || !password || !confirmPassword || !role) {
    alert('Please fill in all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  try {
    const response = await axios.post('http://localhost:8000/api/auth/signup', {
      firstName,
      lastName,
      midelName,
      email,
      password,
      confirmPassword,
      role
    });
    
    // Handle the response as needed
    
    console.log(response.data); // Assuming the response contains the data you need
    
  } catch (error) {
    console.error(error);
    // Handle the error
  }
};
  return (
<div className='form-container'>
    <div className='myweb'>
      Please Create An Account
    </div>
<form  className="form" onSubmit={handleSubmit}>
<div className='test'>
        <label>First Name</label>
        <input
        type="text" name='firstName' placeholder="Enter Your Name" required/>
      </div>

      <div className='test'>
        <label>Midel Name</label>
        <input
        type="text" name='midelName' placeholder="Enter Your Name" required/>
      </div>

      <div className='test'>
        <label>last Name</label>
        <input
        type="text" name='lastName' placeholder="Enter Your Name" required/>
      </div>

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

      <div className='test'>
        <label>Confirm Password</label>
        <div>
          <input type='password' name='confirmPassword' placeholder="Enter Confirm Password" required />
          <button type="button"  className="show-button">
            Show
          </button>
        </div>
      </div>

      <div className='tes'>
        <label> select how are you</label>
<select name='role'>
  <option value={""}></option>
  <option value={"STUDENT"}>Student</option>
  <option value={"TEACHER"}>Teacher</option>
  <option value={"PARENTS"}>Parents</option>

</select>
      </div>

      {/* <div className='test'>
        <label for="file-input" className='file'>chooes your profile picture</label>
        <input
        type="file" id="file-input" required/>
      </div> */}
      

      <button type="submit" className='Log' >
     SignUp
      </button>
      <div className='go'>
        
       <div className='sr'>
       <p>Do you have an account</p>
        <li>
        <Link to='/use/login'>Login</Link>
        </li>
       </div>
      </div>

    </form>
</div>

  );
};

export default SignUp;