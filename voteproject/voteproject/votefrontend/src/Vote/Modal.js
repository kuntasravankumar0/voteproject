import React, { useState, useEffect } from 'react';
import service from '../service';  // Your service for OTP generation and fetching data

const Modal = ({ showModal, closeModal, navigate }) => {
  // States for handling mobile, password, OTP, error, and OTP verification
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [randomOtp, setRandomOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [error, setError] = useState('');
  const [voterData, setVoterData] = useState(null);
  const [loginpasswordin,setloginpasswordin]=useState(true);

  const generateOtp = () => {
    if (!/^([0-9]{10})$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    const generatedOtp = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit OTP
    setRandomOtp(generatedOtp);
    setOtp('');
    setError('');
    
    service.getOtp(mobile, generatedOtp)
      .then((response) => console.log('OTP sent:', response))
      .catch((error) => console.error('Error sending OTP:', error));
  };
  const navig = () => {
    const passwordlogin = {
      password,
      mobile,
    };
  
    service.loginpassword(passwordlogin)
      .then((res) => {
        if (res.data === "Login successful") {
          const datanavigate = { mobile };
          navigate('/voterdata', { state: datanavigate });
        } else {
          setError("Unexpected login response.");
        }
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
  
        if (error.response && error.response.data === "Invalid credentials") {
          setError("Invalid mobile number or password.");
        } else if (error.response && error.response.data === "User not found") {
          setError("No user found with this mobile number.");
        } else {
          setError("An unexpected error occurred.");
        }
      });
  };
  
  

  const verifyOtp = () => {
    if (parseInt(otp) === randomOtp) {
      setIsOtpVerified(true);
      setError('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };


  useEffect(() => {
    if (mobile) {
      service.getbymobilenumber(mobile)
        .then((res) => {
          setVoterData(res.data); 
       
        })
        .catch((error) => {
          console.error('Error fetching voter data:', error); // Handle errors if any
        });
    }
  }, [mobile]);

  if (!showModal) return null; // Don't render the modal if showModal is false

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <p>Already have an account?</p>
        
        {/* Mobile number input */}
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* OTP input */}
        <div>
          <label>OTP:</label>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            disabled={!randomOtp}
          />
          {randomOtp && <span>Generated OTP: {randomOtp}</span>}
        </div>

        {/* Error message */}
        {error && <p className="error">{error}</p>}

        {/* Buttons to handle OTP generation, verification, and login */}
        <button onClick={generateOtp}>Send OTP</button>
        <button onClick={verifyOtp} disabled={!otp || isOtpVerified}>Verify OTP</button>
        <button onClick={closeModal} >close</button>
        
        {/* If OTP is verified, allow the user to log in */}
        {isOtpVerified && (
          <div>
            <button onClick={navig}>voter information</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
