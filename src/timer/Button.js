//import { useContext, useEffect, useState, useRef } from 'react';
//import { TimerContext } from './TimerProvider';
//import React from 'react';


const Button = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
