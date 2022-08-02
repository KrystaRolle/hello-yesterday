// import { Sliders } from "../sliders/Sliders"
import { useNavigate } from "react-router-dom"
import React from "react"
import RangeSlider from 'react-bootstrap-range-slider';
import { useState } from "react"

//when onChange occurs, its going to set the false value of the next
//button to true


export const Instructions = () => {
    const navigate = useNavigate()
    const [ value, setValue ] = useState(1975);

    return <>
        <h2>HelloYesterday</h2>
        <h2>How It Works</h2>
        <article>
            <div>Take Your Guess On 5 Photos</div>
            <div>We Take the Difference from the Actual Year it was Taken</div>
            <div>Then Add It To a Total Score</div>
            <div>The Lower the Score the Better</div>
        </article>
        <h2>Try it Out</h2>
        <RangeSlider
        step={1.0}
        min={1850}
        max={2022}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
        <button onClick={() => navigate("/quizzes")}>I'm Ready To Start</button>
    </>
}