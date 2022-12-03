import React from 'react';
import { useTime } from 'react-timer-hook';

const CurrentTime = () => {
  const { seconds, minutes, hours, ampm } =  useTime({ format: '12-hour'});
  return (
    <div>
    <h3><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span></h3>
    </div>
  )
}

export default CurrentTime