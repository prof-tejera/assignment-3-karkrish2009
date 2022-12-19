//import { useContext, useEffect, useState, useRef } from 'react';
//import { TimerContext } from './TimerProvider';


import React from 'react';





const getMinutes = (remainingTime) => {
  return Math.floor((remainingTime)/(60*1000));
}

const getSeconds = (remainingTime) => {
  return Math.floor((remainingTime%(60*1000))/1000);
}

const getMicroseconds = (remainingTime) => {
  return Math.floor((remainingTime%(1000))/10);
}

const DisplayClock = ({time}) => {

  const minute = getMinutes(time);
  const second = getSeconds(time);
  const microsecond = getMicroseconds(time);

  let minString = ('0' + minute.toString()).slice(-2);
  let secondString = ('0' + second.toString()).slice(-2);
  let microsecondString = ('0' + microsecond.toString()).slice(-2);


  return (
    <div style={{fontSize: '20px'}}>
    <span>{minString}: {secondString}: {microsecondString}</span>
    </div>
  );

}

export default DisplayClock;
