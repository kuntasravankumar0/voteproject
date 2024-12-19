import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct way to use navigate
import Adminapi from '../adminfiles/adminapi';

function Admin() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [randomOtp, setRandomOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [error, setError] = useState('');
  const [voterData, setVoterData] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Track if button is disabled
  const [countdown, setCountdown] = useState(0); // Track the countdown time
  const navigate = useNavigate();

  const generateOtp = () => {
    if (!/^([0-9]{10})$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    const generatedOtp = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit OTP
    setRandomOtp(generatedOtp);
    setOtp('');
    setError('');

    Adminapi.getOtp(mobile, generatedOtp)
      .then((response) => console.log('OTP sent:', response))
      .catch((error) => console.error('Error sending OTP:', error));

    setIsButtonDisabled(true);
    setCountdown(10); // Start countdown from 10 seconds

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval); // Stop the countdown when it reaches 0
          setIsButtonDisabled(false); // Re-enable the button after 10 seconds
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const navig = () => {
  
    const passwordlogin = {
      password,
      mobile,
    };


    Adminapi.loginpassword(passwordlogin)
    .then((res) => {
      if (res.data === "Login successful") {
        const datanavigate = { mobile };
        navigate('/Admindata', { state: datanavigate });
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
      Adminapi.getbymobilenumber(mobile)
        .then((res) => {
          setVoterData(res.data);
          
        })
        .catch((error) => {
          console.error('Error fetching voter data:', error);
        });
    }
  }, [mobile]);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with mobile:", mobile, "Password:", password);
    
   
  };

  
 

  return (
    <div>
      <div>
        <h2 className="login-form__title">Login</h2>
        <p className="login-form__instructions">Already have an account?</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="input-label">Mobile Number:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div>
            <label className="input-label">Password:</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="input-label">OTP:</label>
            <input
              type="number"
              className="input-field"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={!randomOtp}
            />
            {randomOtp && <span className="otp-info-text">Generated OTP: {randomOtp}</span>}
          </div>

          {error && <p className="error-text">{error}</p>}

          <button
            type="button"
            className="primary-button"
            onClick={generateOtp}
            disabled={isButtonDisabled} // Disable button during cooldown
          >
            {isButtonDisabled ? `Resend OTP in ${countdown}s` : 'Send OTP'}
          </button>
          <button type="button" className="primary-button" onClick={verifyOtp} disabled={!otp || isOtpVerified}>
            Verify OTP
          </button>
          <center>{isOtpVerified && (
            <div>
              <button className="redirect-button" onClick={navig}>Go to Admin </button>
            </div>
          )}</center><br />
          <h1><center>click here <a href='/Adminloginpage'> Admin Register</a></center></h1>

        </form>
      </div>

      <div>
        <h1>Voter Registration Information - Telangana</h1>
        <p>
          Any eligible citizen of India, aged 18 or above, can register to vote.
          <p>Registration can be done through the online portal or offline by filling out</p>
          <strong>Form 6</strong> and submitting it to the local Electoral Registration Officer (ERO).
        </p>

        <h2>Online Registration:</h2>
        <p>You can register online through the following portals:</p>
        <ul>
          <li><a href="https://nvsp.in">National Voter's Service Portal (NVSP)</a></li>
          <li><a href="https://ceotelangana.nic.in">Telangana State Election Portal</a></li>
        </ul>

        <h2>Forms for Voter Registration:</h2>
        <ul>
          <li>Form 6: For new voter registration</li>
          <li>Form 8: For corrections in the voter list</li>
          <li>Form 7: For deleting or transferring names</li>
          <li>Form 8A: For changes in address details</li>
        </ul>
      </div>
    </div>
  );
}

export default Admin;
