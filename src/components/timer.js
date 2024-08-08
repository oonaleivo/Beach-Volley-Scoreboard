import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;    

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    const seconds = prevTime.seconds + 1;
                    const minutes = Math.floor(seconds / 60);
                    return { minutes, seconds: seconds % 60 };
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
        setTime({ minutes: 0, seconds: 0 });
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
    backgroundColor: '#FFFFE0',
    fontSize: '13px',
    padding: '7px',
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default Timer;