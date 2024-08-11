import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;    

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    const seconds = prevTime.seconds + 1;
                    const minutes = prevTime.minutes + Math.floor(seconds / 60);
                    const hours = prevTime.hours + Math.floor(minutes / 60);
                    return { hours, minutes: minutes % 60, seconds: seconds % 60 };
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
    };

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };

    return (
        <div>
            <h2 style={{margin: '5px'}}>Game Clock: {formatTime(time.minutes)}:{formatTime(time.seconds)}</h2>
            <button style={buttonSmallStyle} onClick={handleStart}>Start</button>
            <button style={buttonSmallStyle} onClick={handleStop}>Stop</button>
            <button style={buttonSmallStyle} onClick={handleReset}>Reset</button>
        </div>
    );
};

const buttonSmallStyle = {
    backgroundColor: 'white',
    fontSize: '3vw',  // Adjusts based on screen width
    padding: '1vw',  // Adjusts based on screen width
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default Timer;