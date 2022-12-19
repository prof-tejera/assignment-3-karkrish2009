import { useContext, useState, useEffect, useRef } from 'react';
import { TimerContext } from './TimerProvider';
//import Timer from './Timer';
import React from 'react';
import Button from './Button';
import DisplayClock from './DisplayClock';

const ExecuteWorkout = () => {
  return (
      <Workout />
  );
};

const Workout = () => {
  const { queue } = useContext(TimerContext);
  //const [indexToRemove, setIndexToRemove] = useState(0);
  //if (selectedTimerId) return <Timer timerId = {selectedTimerId} />;
  const [activeIndex, setActiveIndex] = useState(0);
  //const [paused, setPaused] = useState(true);
  const [phase, setPhase] = useState("");
  const [timerOn, setTimerOn] = useState(false);

  const [xTime, setXTime] = useState(0);
  const [yTime, setYTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [clockCounter, setClockCounter] = useState(0);
  const new_clock = useRef(true);
  const y_exists = useRef(true);


  let currentTimer = 0;
  let currentXTime = 0;
  let currentYTime = 0;
  let currentCountdown = false;

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        if (activeIndex >= queue.length) return;
        currentXTime = queue[activeIndex].xtime*1000;
        currentYTime = queue[activeIndex].ytime*1000;
        currentCountdown = queue[activeIndex].countdown;
        setCountdown(currentCountdown);
        console.log(currentCountdown);
        if (currentCountdown) {
          if (currentYTime <= 0) {
            setPhase("Countdown Clock");
          }
          else {
            setPhase("XY Clock");
          }
        }
        else {
          setPhase("StopWatch");
          setFinalTime(currentXTime/1000);
        }
        if (new_clock.current) {
          let final_time = 0;
          if (currentCountdown) {
            final_time = currentXTime;
          }
          setXTime(final_time);
          setYTime(currentYTime);
          new_clock.current = false;
          setClockCounter(0);
          if (countdown && yTime > 0) {
            y_exists.current = true;
          }
        }

        console.log("else currentXTime", currentXTime);
        console.log("else currentYTime", currentYTime);
        console.log("else currentcountdown", countdown);
        console.log("else currentTimer", clockCounter);
        if (clockCounter < currentXTime) {
          console.log("xTime", xTime);
          if (countdown){
            setXTime(xTime => xTime - 10);
            setClockCounter(clockCounter => clockCounter + 10);
          }
          else {
            setXTime(xTime => xTime + 10);
            setClockCounter(clockCounter => clockCounter + 10);
            console.log("in scond else xTime", xTime);
            console.log("in scond else currentTimer", currentTimer);
          }
        }
        else if (countdown === true && currentYTime > 0 ){
          if (clockCounter < currentYTime + currentXTime) {
            setYTime(yTime => yTime - 10);
            setClockCounter(clockCounter => clockCounter + 10);
          }
        }
        else {
          console.log("I am here after ending the clock");
          if (activeIndex >= queue.length - 1) return;
          setActiveIndex(activeIndex => activeIndex + 1);
          new_clock.current = true;
        }

        // set the timer parameter
      }, 10);

    }
    else {
      return clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, xTime, yTime])








  console.log("Execute", queue);


  //resetTimer: () => setActive(0),

  return (
    <div id="workout">
      <div>
        <Button onClick={() => setTimerOn(true)}>Start</Button>
        <Button onClick={() => setTimerOn(false)}>Stop</Button>
        <Button onClick={() => setTimerOn(true)}>Resume</Button>
      </div><br/>
        <span>----------------------------------------</span>
        <div>
          <span>Clock Number {activeIndex + 1}: {phase}</span>
          {phase === "StopWatch" && <span> with upper time limit of {finalTime} seconds</span>}
        </div>
        <div>
          <DisplayClock time={xTime}/>
          {countdown && (yTime > 0) &&
          <DisplayClock time={yTime}/>
          }
        </div>
    </ div>
  );
};




export default ExecuteWorkout;
