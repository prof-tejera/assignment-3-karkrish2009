import React, {useState} from 'react';
//import {gql, useMutation} from '@apollo/client';
//import {CREATE_TIMER} from './Queries';


export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);

  return (
    <TimerContext.Provider
      value={{
        queue,
        addTimer: (item) => {
          setQueue(q => [...q, item]);
          console.log("Timer Data");
          console.log(item.id);
          console.log(item.xtime);
          console.log(item.ytime);
          console.log(item.countdown);
          //const [createTimer, {item, loading, error}] = useMutation(CREATE_TIMER);
          //console.log("loading", loading);
          //console.log("error", error);
        },
        removeTimer: (index) => {
          console.log("index is ", queue[index]);
          setQueue(q => q.filter((q,i) => i !== index));
        },
        executeWorkout: () => {
          return(
            <Workout />
          );
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  );

};

const Workout = () => {
  return (
    <div>Hello All</div>
  )
}

export default TimerProvider;
