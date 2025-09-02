import React from 'react'

function Weather({ city, temperatureC, condition }) {
    const temperatureF = (temperatureC * 9) / 5 + 32;
    return (
        <>
            <h1>Weather Report</h1>
            <p>City: {city}</p>
            <p>Temperature: {temperatureC}°C</p>
            <p>Condition: {condition}</p>
            <p>{temperatureC}°C / {temperatureF.toFixed(1)}°F</p>
        </>
    )
}

export default Weather