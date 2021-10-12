import React from 'react'
import {StateType} from "../App";

type WeatherPropsType = {
    state: StateType
    error: string
}
const Weather = (props: WeatherPropsType) => {
    return (
        <div>
            { props.state.city && <div className={"infoWeath"}>
                <p> Location: {`${props.state.city} ${','} ${props.state.country}`}</p>
                <p> Temperature: {props.state.temp} {`${", °C"}`}</p>
                <p> Pressure: {props.state.pressure}</p>
            </div>}
            {props.error && <div className={"error"}>{props.error}</div>}
        </div>
    )
}
export default  Weather;