import React from 'react';
import classes from './errorMessage.module.css'
import warningIcon from '../assets/warning.svg'
import cancelIcon from '../assets/cancel.svg'

interface MessageProps {
  content: string;
}

const ErrorMessage: React.FC<MessageProps> = ({ content }) => {
  return <p className={classes.message}><img src={warningIcon} alt=""/>{content}<img src={cancelIcon} alt=""/></p>;
};

export default ErrorMessage;
