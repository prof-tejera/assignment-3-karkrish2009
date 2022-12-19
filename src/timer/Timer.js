import { useEffect, useState, useRef, useContext } from 'react';
import TimerProvider, { TimerContext } from './TimerProvider';
//import { TimerContext } from './TimerProvider';
import Button from './Button';
import DisplayClock from './DisplayClock';
import React, {Component} from 'react';



const Timer = ({id, xtime, ytime, countdown}) => {

  console.log("In Timer");
  console.log(id, xtime, ytime, countdown);
  let final_time = 0;

  //const {active, setActive} = useContext(TimerContext);



  if (countdown) {
   final_time = xtime * 1000;
  }
  const [xTime, setXTime] = useState(final_time);

  const [timerOn, setTimerOn] = useState(false);
  const [phase, setPhase] = useState("");
  const [yTime, setYTime] = useState(ytime * 1000);

  /*
  const[round, setRound] = useState(rounds);
  if (rounds < 1){
    setRound(round => round = 1);
    rounds = 1;
  }
  */

  let yExists = false;
  if (ytime > 0) {
      yExists = true;
  }

  console.log("Marker 2", yExists, ytime);


  const current_phase = useRef(true);



  useEffect(() => {
    let interval = null;

    let runx = xTime;
    let runy = yTime;
    let round_number = 1;

    if (countdown) {
      if (!yExists) {
        setPhase("Countdown Clock");
      }
      else {
        setPhase("XY Clock");
      }
    }
    else {
      setPhase("StopWatch");
    }

    console.log("phase", phase.current);

    if (timerOn) {

      interval = setInterval(() => {

        console.log("in DisplayClock", round_number);
        if (current_phase.current) {

          console.log("2", current_phase.current);

          if (countdown) {

            console.log("2", current_phase.current);
            if (runx > 0 ){
              runx = runx  - 10;
              setXTime(xTime => xTime-10);
              console.log("3", xTime);
            }
            else {
              if (yExists) {
                current_phase.current = false;
                setPhase("XY Clock: Y Phase");
              }
              else {
                return clearInterval(interval);
              }
                //return clearInterval(interval);
            }
          }
          else {
            if (runx < xtime * 1000){
              runx = runx + 10;
              setXTime(xTime => xTime + 10);
            }
            else {
              if (yExists && countdown.current) {
                current_phase.current = false;
                setPhase("XY Clock: Y Phase");
              }
              else {
                return clearInterval(interval);
              }
            }
          }
          console.log("4", "I am here end of if");

        }
        else {
          if (runy > 0 ){
            runy = runy  - 10;
            setYTime(yTime => yTime-10);
          }
          else {
            current_phase.current = true;
              //setPhase("X and Y Phases Completed");
            return clearInterval(interval);
          }
        }


      }, 10);

    }
    else {
      return clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, countdown, phase, xTime, xtime, yExists, yTime])


  return (
    <div key={id}>
      <div>
      {id > 1 &&
      <span>----------------------------------------</span>
      }
      </div>
      <div>
        <span>Clock Number {id}: {phase}</span>
        {phase === "StopWatch" && <span> with upper time limit of {xtime} minutes</span>}
      </div>
      <div>
        <DisplayClock time={xTime}/>
        {countdown && (ytime > 0) &&
        <DisplayClock time={yTime}/>
        }
      </div>
      <div>
        <Button onClick={() => setTimerOn(true)}>Start</Button>
        <Button onClick={() => setTimerOn(false)}>Stop</Button>
        <Button onClick={() => setTimerOn(true)}>Resume</Button>
        <Button onClick={() => {setXTime(final_time); setYTime(ytime*1000); setTimerOn(false);current_phase.current = true;}}>Reset</Button>
      </div>
    </div>

  );

}




export default Timer;
