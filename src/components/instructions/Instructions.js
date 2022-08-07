import { useNavigate } from "react-router-dom"
import React from "react"
import RangeSlider from 'react-bootstrap-range-slider';
import { useState, useEffect } from "react"

//when onChange occurs, its going to set the false value of the next
//button to true
//useState is a hook that has array destructuring to make a copy and assign it to a variable
//useEffect is a hook that causes side effects in a componenet. it has a callback function and a destructured array

export const Instructions = () => {
    const navigate = useNavigate()
    //useNavigate returns a function that lets you navigate through the program (hook)
    const [value, setValue] = useState(1975);
    const [images, setImages] = useState([])
    const [randomImageObj, setRandomImageObj] = useState({})
    const [toggle, setToggle] = useState(false)
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/photos`)
                .then(response => response.json())
                .then((imgLinkArray) => {
                    setImages(imgLinkArray)
                })
        },
        []
    )

    const getRandomImgObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
    };

    useEffect(
        () => {
            setRandomImageObj(getRandomImgObject(images))
        },
        [images]
    )


    useEffect(
        () => {

        },
        [toggle]
    )

    return <>
        <h2>HelloYesterday</h2>
        <h2>How It Works</h2>
        <article>
            <div>Take Your Guess On 5 Photos</div>
            <div>We Take the Difference from the Actual Year it was Taken</div>
            <div>The Average of the Difference is Your Score</div>
            <div>The Lower the Score the Better</div>
        </article>
        <h2>Try it Out</h2>
        <img src={randomImageObj?.imgLink} onClick={randomImageObj?.photoSummary} alt="photo" />
        <>
        {!toggle && (
        <RangeSlider
            step={1.0}
            min={1850}
            max={2022}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        )}
        </>
        {!toggle && (
            <button onClick={() => { setToggle(!toggle) }}>Submit</button>
        )}
        {toggle && (
        <>
        <div>Your Choice</div>
        <div>{value}</div>
        <div>Year Taken</div>
        <div>{randomImageObj?.yearTaken}</div>
        <button onClick={() => navigate("/quizzes")}>I'm Ready To Start</button>
        </>
            )}
    </>
}
//Instructions page
//initially shows instructions photo and slider
//when user hits submit the user choice and year the photo was taken is displayed
//user can click button saying im ready to start to be taken to the quiz page