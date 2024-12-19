import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css'; 
import Adminapi from '../adminfiles/adminapi';

function Adminloginpage() {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');  // State for OTP input
  const [randomOtp, setRandomOtp] = useState('');  // State to hold generated OTP
  const [isOtpVerified, setIsOtpVerified] = useState(false);  // State to track OTP verification status


const navi=()=>
{
  navigate('/admin');
}





  const generateOtp = () => {
   
    if (!/^([0-9]{10})$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const generatedOtp = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit OTP
    setRandomOtp(generatedOtp); 
    setOtp('');  

    console.log(`Generated OTP: ${generatedOtp}`);

    Adminapi.getOtp(mobile, generatedOtp)
      .then((response) => console.log(response))
      .catch((error) => console.error('Error:', error));
  };

  
  const verifyOtp = () => {
    if (parseInt(otp) === randomOtp) {
      setIsOtpVerified(true);
      setError(''); 
      console.log('OTP Verified');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };



  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();  
    setError(''); 

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!isOtpVerified) {
      setError("Please verify OTP before proceeding.");
      return;
    }

    const dataposttoadmin={
      name,
      email,
      mobile,
      password,
    
    }
    
    Adminapi.Admingetbymobilenumber(dataposttoadmin)
    .then((response) => {
      
    navigate('/Admindata', {
      state: {
        name,
        email,
        mobile
      }
    });
     
    })
    .catch((error) => {
    
      console.error(error.response.data);
      if (error.response && error.response.data && error.response.data.includes("already exists")) {
        alert("User with this mobile already exists.");
      } else {
        setError("An unexpected error occurred.");
      }
    });
  
  };

  return (
    <div className="voter-register-container">
      <center><h1>Admin Registration</h1></center>
      <div>
        {error && <p className="error">{error}</p>} {/* Display error if any */}
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div>
            <label>Name:</label><br/>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email input */}
          <div>
            <label>Email:</label><br/>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mobile input */}
          <div>
            <label>Mobile:</label><br/>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}" // Regex validation for 10-digit mobile number
            />
          </div>

          {/* Password input */}
          <div>
            <label>Password:</label><br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password input */}
          <div>
            <label>Confirm Password:</label><br/>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* OTP input */}
          <div>
            <label>OTP:</label><br/>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)} // Correctly set OTP value
              required
            /><br />
            {randomOtp && <span>Generated OTP: {randomOtp}</span>}
            <br />
            <button type="button" onClick={generateOtp}>Send OTP</button>  {/* Trigger OTP generation */}
            <button type="button" onClick={verifyOtp} disabled={!otp}>Verify OTP</button> {/* Verify OTP */}
          </div>
          <br />
          {/* Submit button */}
          <button type="submit" disabled={!isOtpVerified}>Register</button>
          <button onClick={navi}>allready have a account</button>
        </form>
      </div>
    </div>
  );
}

export default Adminloginpage;
