import React, {useState} from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b326a97e75be8ded20fc476c2995cbad"

export type StateType = {
    temp: number | undefined
    city: string | undefined
    country: string | undefined,
    pressure: string | undefined,
    sunset: string | undefined
}

function App() {

    const [state, setState] = useState<StateType>({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined
    })
    const [error, setError] = useState(" ")

    const gettingWeather = async (event: any) => {
        try {
            event.preventDefault()
            const city = event.target.elements.city.value;
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            if (city && (city.trim() !== "")) {
                const temp = data.main.temp;
                const cityName = data.name;
                const country = data.sys.country;
                const pressure = data.main.pressure;
                setState({
                    ...state, temp: temp, city: cityName, country: country, pressure: pressure,
                })
                setError("")
            } else {
                setError("Error! Enter city name!")
            }
        } catch (e) {
            // @ts-ignore
            setState('')
            setError("Error! Enter the correct city name!")
        }
    }
    return (
        <div className={"container"}>
            <div className={"wrapper"}>
            <Info/>
            <div className={"main"}>
                <Form gettingWeather={gettingWeather}/>
                <Weather state={state} error={error}/>
            </div>
        </div>
        </div>
    );
}

export default App;
