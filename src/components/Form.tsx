import React, {useState} from 'react'
type FormType = {
    gettingWeather: (event: any) => void
}
const Form = (props: FormType) => {
    return (
        <form className= {"form"} onSubmit={props.gettingWeather}>
            <input type = 'text' name = 'city' placeholder={'City'}/>
            <button>get weather</button>
        </form>
    )
}
export default  Form;