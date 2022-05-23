import React, { createElement, useEffect, useState } from 'react'
import '../../index.css'

const getCurrentDateAndTime = () => {
    return new Date().toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    })
}

function DigitalClock() {
    const [currentDateAndTime, setCurrentDateAndTime] = useState(getCurrentDateAndTime())
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = getCurrentDateAndTime()
            setCurrentDateAndTime(newDate);
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className="wrapper">
            <h2>Example of function component with createElement usage - DigitalClock</h2>
            {createElement('span', null, currentDateAndTime)}
        </div>
    )
}

export default DigitalClock