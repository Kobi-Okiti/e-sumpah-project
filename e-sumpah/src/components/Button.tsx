import React, { ReactNode } from 'react';

interface ButtonProps {
  fontSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
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
  onClick,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    paddingTop: paddingTop ? paddingTop : '16px',
    paddingBottom: paddingBottom ? paddingBottom : '16px',
    paddingLeft: paddingLeft ? paddingLeft : '',
    paddingRight: paddingRight ? paddingRight : '16px',
    fontSize: fontSize || '14px',
    width: width ? width : 'auto',
  };

  return <button style={buttonStyle} onClick={onClick} >{children}</button>;
};

export default Button;
