import { useNavigate } from "react-router-dom"
import React from "react"
import RangeSlider from 'react-bootstrap-range-slider';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export const Quizzes = () => {
   
    const [value, setValue ] = useState(1975);
    const [images, setImages] = useState([])
    const [randomImageObj, setRandomImageObj] = useState({})
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    //use effect needs to be set to something to stop image from rerendering
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

//make sure that they do not repeat with array method
//create a getRandomImgObject, 1 ,2 3, 4, 5 and set them all invidually 
//find out how to rerender different element in others place
// have values for each object and slider 
//or
//only have it to where button can be pressed 5 times
//each press has a use effect that saves that value to an array 

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
            
            
            const handleRefresh = () => {
                // by calling this method react re-renders the component
                setToggle(!toggle)
                fetch(`http://localhost:8088/photos`)
                .then(response => response.json())
                .then((photoArr) => {
                    setImages(photoArr)
                    getRandomImgObject(images)
                    // console.log("Initial state of tickets", tickets) // View the initial state of tickets
                })     
              };
    
        
        return <>
    {!toggle && (
    <div>
    <h2>HelloYesterday</h2>
        <div>What Year Was This?</div>
        <img src={randomImageObj?.imgLink} onClick={randomImageObj?.photoSummary} alt="photo" />
        

         <RangeSlider
        step={1.0}
        min={1850}
        max={2022}
        value={value}
        onChange={e => setValue(e.target.value)}
        />
      </div>
      )}
       {!toggle && (
      <button onClick={() => { setToggle(!toggle) }}>Submit</button>
      )}
       {toggle && (
        <>
           <div>Photo description </div>
              {randomImageObj.photoSummary} 
              <div>Your Choice</div>
              <div>{value}</div>
           <div> Years Difference </div>
           <div>{Math.abs(value-randomImageObj?.yearTaken)}</div> 
           <div>Year Taken</div>
           <div>{randomImageObj.yearTaken}</div>
           <button onClick={() => {handleRefresh()}}>Try Quiz Again</button>
           <div className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="/login" onClick={() => {
                            localStorage.removeItem("quiz_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </div>
           </>
       )}
    </>
}





//) => navigate("/results")

// const a = 10;
// const b = -20;

// const difference = a > b ? a - b : b - a;

//consider render
//onChange - expand to enable button
//

//i think i can just write array.push(value)?


//i can make a seperate images component to randomize photos,
//instead of rendering the whole page, i only render the photo
//when button is clicked, the value is pushed into an array, etc.


//have an array to hold values for the 5 submits
//with every click of button 
//push value of slider into that array
//do an array method that adds all of those values together
//score will then be on results page

// images here to get date of image

// import { useNavigate } from "react-router-dom"
// import React from "react"
// import RangeSlider from 'react-bootstrap-range-slider';
// import { useState } from "react"
// import { Images } from "../images/Images";


// export const Quizzes = () => {
//     const navigate = useNavigate()
//     const [ value, setValue ] = useState(1975);
    

//     return <>
//     <div>
//     <h2>HelloYesterday</h2>
//         <Images/>
//          <RangeSlider
//         step={1.0}
//         min={1850}
//         max={2022}
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//       </div>
//         <button onClick={() => navigate("/results")}>Submit</button>
//     </>
// }



