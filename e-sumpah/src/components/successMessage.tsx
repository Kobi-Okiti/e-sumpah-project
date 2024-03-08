import React from 'react';
import classes from './successMessage.module.css'
import cancelIcon from '../assets/cancel.svg'

interface MessageProps {
  content: string;
}

const SuccessMessage: React.FC<MessageProps> = ({ content }) => {
  return <p className={classes.message}>{content}<img src={cancelIcon} alt=""/></p>;
};

export default SuccessMessage;
