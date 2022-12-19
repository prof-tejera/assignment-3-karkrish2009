import { useContext } from 'react';
import { TimerContext } from './TimerProvider';
import Timer from './Timer';
import React from 'react';


const CreateWorkOut = () => {
  return (

      <TimerBlog />

  );
};

const TimerBlog = () => {
  const { queue, addTimer, removeTimer } = useContext(TimerContext);
  console.log("TimerBlog", queue);
  //const [indexToRemove, setIndexToRemove] = useState(0);
  //if (selectedTimerId) return <Timer timerId = {selectedTimerId} />;
  return (
    <div>
    <button
      onClick ={() => {
        addTimer({
          id: (queue.length + 1),
          xtime: Math.floor(Math.random()*10) + 3,
          ytime: Math.floor(Math.random()*10) + 1,
          countdown: Math.floor(Math.random()*2) === 1 ? true: false,
        })
      }}>Add Timer
    </button>
    <button
      onClick = {() => {
        let indexToRemove = ((queue.length - 1) > 0) ? (queue.length - 1) : 0;
        removeTimer(indexToRemove);
      }}> Remove Timer</button><br />
    <span>----------------------------------------</span>

    <div>
        {queue.map((t, i) => (
          <Timer id={t.id} xtime={t.xtime} ytime={t.ytime} countdown={t.countdown} />
        ))}
    </div>
    </ div>
  );
};




export default CreateWorkOut;
