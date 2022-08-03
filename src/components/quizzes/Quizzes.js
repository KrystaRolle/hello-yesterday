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

//coult return an array of 5 photo objetcs, map, 

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
    <h2>HelloYesterday</h2>
    <div>What Year Was This?</div>
        <>
        <img src={randomImageObj?.imgLink} onClick={randomImageObj?.photoSummary} alt="photo" />
    {!toggle && (
    <div>
     
        
       
        

         <RangeSlider
        step={1.0}
        min={1850}
        max={2022}
        value={value}
        onChange={e => setValue(e.target.value)}
        />
      </div>
      )}
      </>
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

//random object func* 5 push all those objects in to an array and return those 5 random obj
//lable images with img1, img2, img, 3 etc
//map function to get photos and year
//display each photo.imglink with its own map function
//then compare users slider value choice number with the obj number.yearTaken
//display difference of each photo in the bottom toggle area
//maybe make slider below to show the year.taken of each photo as preset in the slider
//disable that slider


//const [valueOne, setValueOne ] = useState(1975);
//const [valueOne, setValueOne ] = useState(1975);
//const [valueOne, setValueOne ] = useState(1975);
//const [valueOne, setValueOne ] = useState(1975);
//const [valueOne, setValueOne ] = useState(1975);

// const getRandomImgObject = (array) => {
    //arguments in use effect not in the function
//     const randomObject = array[Math.floor(Math.random() * array.length)];
//     const randomObject2 = array[Math.floor(Math.random() * array.length)];
//     const randomObject3 = array[Math.floor(Math.random() * array.length)];
//     const randomObject4 = array[Math.floor(Math.random() * array.length)];
//     const randomObject5 = array[Math.floor(Math.random() * array.length)];
//need 5 setrandom image object and set all of those with their own use effect/image variable
//make function go 5 times
//no array have 5 use effect that use each randomOBject# as argment
//map 
//handle refresh should call 5 new obj

//     return randomObject;
// };


{/* <RangeSlider
step={1.0}
min={1850}
max={2022}
value={valueOne}
onChange={e => setValue(e.target.value)}
/> */}

//const [valueTwo, setValueTwo ] = useState(1975);


{/* <RangeSlider
step={1.0}
min={1850}
max={2022}
value={valueTwo}

onChange={e => setValue(e.target.value)}
/> */}


{/* <RangeSlider
step={1.0}
min={1850}
max={2022}
value={valueThree}
onChange={e => setValue(e.target.value)}
/> */}

//const [valueFour, setValueFour ] = useState(1975);

{/* <RangeSlider
step={1.0}
min={1850}
max={2022}
value={valueFour}
onChange={e => setValue(e.target.value)}
/> */}

//const [valueFive, setValueFive ] = useState(1975);


{/* <RangeSlider
step={1.0}
min={1850}
max={2022}
value={valueFive}
onChange={e => setValue(e.target.value)}
/> */}


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


// import { useNavigate } from "react-router-dom"
// import React from "react"
// import RangeSlider from 'react-bootstrap-range-slider';
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";

// export const Quizzes = () => {
   
//     const [value, setValue ] = useState(1975);
//     const [images, setImages] = useState([])
//     const [randomImageObj, setRandomImageObj] = useState({})
//     const [toggle, setToggle] = useState(false)
//     const navigate = useNavigate()
//     //use effect needs to be set to something to stop image from rerendering
//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/photos`)
//                 .then(response => response.json())
//                 .then((imgLinkArray) => {
//                     setImages(imgLinkArray)
//                 })
//         },
//         []
//     )

// //make sure that they do not repeat with array method
// //create a getRandomImgObject, 1 ,2 3, 4, 5 and set them all invidually 
// //find out how to rerender different element in others place
// // have values for each object and slider 
// //or
// //only have it to where button can be pressed 5 times
// //each press has a use effect that saves that value to an array 

// //coult return an array of 5 photo objetcs, map, 

//     const getRandomImgObject = (array) => {
//         const randomObject = array[Math.floor(Math.random() * array.length)];

//         return randomObject;
//     };

//     useEffect(
//         () => {
//             setRandomImageObj(getRandomImgObject(images))
//         },
//         [images]
//         )
        
        
//         useEffect(
//             () => {
                
//             },
//             [toggle]
//             )
            
            
//             const handleRefresh = () => {
//                 // by calling this method react re-renders the component
//                 setToggle(!toggle)
//                 fetch(`http://localhost:8088/photos`)
//                 .then(response => response.json())
//                 .then((photoArr) => {
//                     setImages(photoArr)
//                     getRandomImgObject(images)
//                     // console.log("Initial state of tickets", tickets) // View the initial state of tickets
//                 })     
//               };
    
        
//         return <>
//     <h2>HelloYesterday</h2>
//     <div>What Year Was This?</div>
//         <>
//         <img src={randomImageObj?.imgLink} onClick={randomImageObj?.photoSummary} alt="photo" />
//     {!toggle && (
//     <div>
     
        
       
        

//          <RangeSlider
//         step={1.0}
//         min={1850}
//         max={2022}
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         />
//       </div>
//       )}
//       </>
//        {!toggle && (
//       <button onClick={() => { setToggle(!toggle) }}>Submit</button>
//       )}
//        {toggle && (
//         <>
//            <div>Photo description </div>
//               {randomImageObj.photoSummary} 
//               <div>Your Choice</div>
//               <div>{value}</div>
//            <div> Years Difference </div>
//            <div>{Math.abs(value-randomImageObj?.yearTaken)}</div> 
//            <div>Year Taken</div>
//            <div>{randomImageObj.yearTaken}</div>
//            <button onClick={() => {handleRefresh()}}>Try Quiz Again</button>
//            <div className="navbar__item navbar__logout">
//                         <Link className="navbar__link" to="/login" onClick={() => {
//                             localStorage.removeItem("quiz_user")
//                             navigate("/", {replace: true})
//                         }}>Logout</Link>
//                     </div>
//            </>
//        )}
//     </>
// }
