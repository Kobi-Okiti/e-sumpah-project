import React, { useState } from 'react';
import Button from './Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleRequestOTP = () => {
    fetch('https://esumpah-backend-admin-l7ropoat7a-uc.a.run.app/api/client/signing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        client_type: 'Client',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('OTP requested:', data.data.message);
      })
      .catch(error => {
        console.error('Error requesting OTP:', error);
      });
  };

  const handleSignIn = () => {

    fetch('https://esumpah-backend-admin-l7ropoat7a-uc.a.run.app/api/client/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verifyToken: parseInt(otp),
        type: 'Client',
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Signed in');
          
        } else {
          throw new Error('Sign-in failed');
        }
      })
      .catch(error => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <form>
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
