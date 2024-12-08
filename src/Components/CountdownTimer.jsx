import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function CountdownTimer() {
    const [inputValue ,setInputValue] = useState("");
    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning] =useState(false);
    useEffect(()=>{
        let timer;
        if(time>0 && isRunning){
            timer = setInterval(()=>{
                setTime(prevTime =>prevTime-1)
            },1000)
            
        }
        else if(time===0){
            setIsRunning(false);
        }
        return() => clearInterval(timer);
    },[isRunning,time])
    const handlechange =(e)=>{
        setInputValue(e.target.value);
    }
    const handleClick = ()=>{
        if(inputValue >0){
            setTime(parseInt(inputValue));
            setIsRunning(true);
        }
    }
  return (
    <div>
        <h1>Countdown Timer</h1>
    <input type="number" value={inputValue} placeholder='eneter no. here' onChange={handlechange} />
    <button onClick={handleClick}>Start Countdown</button>
    <h2>{time} seconds</h2>
      
    </div>
  )
}

export default CountdownTimer
