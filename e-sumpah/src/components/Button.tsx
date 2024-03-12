import React, { ReactNode } from 'react';

interface ButtonProps {
  fontSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
  color?: string;
  border?: string;
  backgroundColor?: string;
  onClick?: any;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  fontSize,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  color,
  border,
  backgroundColor,
  onClick,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    paddingTop: paddingTop ? paddingTop : '16px',
    paddingBottom: paddingBottom ? paddingBottom : '16px',
    paddingLeft: paddingLeft ? paddingLeft : '16px',
    paddingRight: paddingRight ? paddingRight : '16px',
    fontSize: fontSize || '14px',
    width: width ? width : 'auto',
    color: color ? color : 'white',
    border: border ? border : 'none',
    backgroundColor: backgroundColor ? backgroundColor : '#CC0000',
  };

  return <button style={buttonStyle} onClick={onClick} >{children}</button>;
};

export default Button;
