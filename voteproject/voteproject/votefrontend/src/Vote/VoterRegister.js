import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './allcss.css'; // Ensure the custom alert CSS is included
import service from '../service'; // Your service for OTP generation
import Modal from './Modal';

function VoterRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [randomOtp, setRandomOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOtpButtonDisabled, setIsOtpButtonDisabled] = useState(false); // New state for button control
  const [countdown, setCountdown] = useState(0); // Countdown timer

  useEffect(() => {
    const savedData = sessionStorage.getItem('voterData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setName(parsedData.name);
      setEmail(parsedData.email);
      setMobile(parsedData.mobile);
      setAge(parsedData.age);
      setAadhar(parsedData.aadhar);
      setPassword(parsedData.password);
      setConfirmPassword(parsedData.confirmPassword);
    }
  }, []);

  // Function to show the custom error alert
  const showErrorAlert = (message) => {
    setError(message);
    setTimeout(() => {
      setError(''); // Clear the error after 3 seconds
    }, 3000); // 3 seconds delay for disappearing alert
  };

  // Generate OTP and handle OTP sending
  const generateOtp = () => {
    if (password !== confirmPassword) {
      showErrorAlert('Passwords do not match!');
      return;
    }

    if (age < 18 || age > 120) {
      showErrorAlert('You must be at least 18 years  and below 120 old  to register.');
      return;
    }

    if (!/^([0-9]{10})$/.test(mobile)) {
      showErrorAlert('Please enter a valid 10-digit mobile number.');
      return;
    }

    const generatedOtp = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit OTP
    setRandomOtp(generatedOtp);
    setOtp(''); // Reset OTP field

    // Simulate sending OTP via service
    service.getOtp(mobile, generatedOtp)
      .then((response) => console.log(response))
      .catch((error) => console.error('Error:', error));

    // Disable the OTP button for 10 seconds and start the countdown
    setIsOtpButtonDisabled(true);
    setCountdown(10); // Start countdown from 10 seconds

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval); // Stop the countdown when it reaches 0
          setIsOtpButtonDisabled(false); // Re-enable the button after 10 seconds
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  // Verify the entered OTP
  const verifyOtp = () => {
    if (parseInt(otp) === randomOtp) {
      setIsOtpVerified(true);
      setError('');
    } else {
      showErrorAlert('Invalid OTP. Please try again.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isOtpVerified) {
      showErrorAlert("Please verify OTP before proceeding.");
      return;
    }

    const datapost = { name, email, mobile, age, aadhar, password };

    sessionStorage.setItem('voterData', JSON.stringify(datapost));

    service.postVotedata(datapost)
      .then((response) => {
        const datanavigate = { mobile };
        navigate('/voterdata', { state: datanavigate });
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error);
        if (error.response && error.response.data && error.response.data.includes("already exists")) {
          showErrorAlert("User with this mobile already exists.");
        } else {
          showErrorAlert("An unexpected error occurred.");
        }
      });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="voter-register-container">
      <center><h1>Voter Registration</h1></center>
      
      {/* Custom Alert */}
      {error && <div className="custom-alert">{error}</div>}

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label>Mobile:</label><br />
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required pattern="[0-9]{10}" />
          </div>

          <div>
            <label>Age:</label><br />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required min="1" />
          </div>

          <div>
            <label>Aadhar Number:</label><br />
            <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} required pattern="[0-9]{12}" />
          </div>

          <div>
            <label>Password:</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div>
            <label>Confirm Password:</label><br />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div>
            <label>OTP:</label><br />
            <input type="number" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <br />
            {randomOtp && <span>Generated OTP: {randomOtp}</span>}
            <br />
            <button type="button" onClick={generateOtp} disabled={isOtpButtonDisabled}>
              {isOtpButtonDisabled ? `Please wait ${countdown}s` : 'Send OTP'}
            </button>
            <button type="button" onClick={verifyOtp} disabled={!otp}>Verify OTP</button>
          </div>

          <button type="submit" disabled={!isOtpVerified}>Register</button>
          <button type="button" onClick={openModal}>Already have an account</button>
        </form>
      </div>

      {showModal && <Modal showModal={showModal} closeModal={closeModal} navigate={navigate} />}
    </div>
  );
}

export default VoterRegister;
