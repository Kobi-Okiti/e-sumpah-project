import React, { useState } from 'react';
import Button from './Button';



interface LoginFormProps {
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm: React.FC<LoginFormProps>= ({ setErrorMessage, setSuccessMessage }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  // const [redirect, setRedirect] = useState(false);
  // const [successMessage, setSuccessMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleRequestOTP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    fetch('https://esumpah-backend-admin-dev-l7ropoat7a-uc.a.run.app/api/client/signing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        client_type: 'Client',
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(data => {
            throw new Error(data.message || 'OTP request failed');
          });
        }
      })
      .then(data => {
        console.log('OTP requested:', data.data.message);
        setSuccessMessage(data.message || 'OTP requested successfully');
      })
      .catch(error => {
        console.error('Error requesting OTP:', error.message);
        setErrorMessage(error.message);
      });
      
  };
  
  

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    fetch('https://esumpah-backend-admin-dev-l7ropoat7a-uc.a.run.app/api/client/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verifyToken: Number(otp),
        type: 'Client',
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Sign-in failed');
        }
      })
      .then(data => {
        console.log('Signed in');
        // Extract token from the response JSON
        const accessToken = data.data.token;
        // Save token to local storage
        localStorage.setItem('accessToken', accessToken);
        // Save user details to local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('otp', otp);
        // Log user details to console
        console.log('User Email:', email);
        console.log('OTP:', otp);
        console.log('Access Token:', accessToken);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Failed to sign in. Please try again.');
      });
  };
  
  
  
  return (
    <form >
      <label>
        Email
        <input type="email" required placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label id="otp">
        OTP
        <input type="text" required placeholder="Enter 6-digit OTP" value={otp} onChange={e => setOtp(e.target.value)} />
        <Button
          fontSize="12px"
          paddingTop="5px"
          paddingBottom="5px"
          paddingLeft="10px"
          paddingRight="10px"
          onClick={handleRequestOTP}
        >
          Request OTP
        </Button>
      </label>
      <label id="checkbox">
        <input type="checkbox" />
        Keep me signed in
      </label>
      <Button fontSize="14px" paddingTop="16px" paddingBottom="16px" onClick={handleSignIn}>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
