import { useNavigate } from "react-router-dom"
import React from "react"
import RangeSlider from 'react-bootstrap-range-slider';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export const Quizzes = () => {
    //setting intial state of the slider value
    const [value, setValue] = useState(1975);
    const [valueTwo, setValueTwo] = useState(1975);
    const [valueThree, setValueThree] = useState(1975)
    const [valueFour, setValueFour] = useState(1975)
    const [valueFive, setValueFive] = useState(1975)
    //initial state for images
    const [images, setImages] = useState([])
    //initial state of random img objects
    const [randomImageObj, setRandomImageObj] = useState({})
    const [randomImageObjTwo, setRandomImageObjTwo] = useState({})
    const [randomImageObjThree, setRandomImageObjThree] = useState({})
    const [randomImageObjFour, setRandomImageObjFour] = useState({})
    const [randomImageObjFive, setRandomImageObjFive] = useState({})
    //initial state of toggle is false
    const [toggle, setToggle] = useState(false)
    //initial state of average score
    const [average, setAverage] = useState(0)
    //initial state of quizzes
    const [quizzes, setQuizzes] = useState([])
    //initial state of users past scores
    const [userPastScores, setUserPastScores] = useState([])
    //
    const localQuizUser = localStorage.getItem('quiz_user')
    const quizUserObject = JSON.parse(localQuizUser)
     //local storage to client data
     //JSON parse makes json into an object

    const navigate = useNavigate()
    //useNavigate to return function that allows navigation through thte program
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
    // callback function that fetches specific data
    //.then shows representation of response from the server
    //.then responds with the request
    useEffect(
        () => {
            fetch(`http://localhost:8088/completedQuizzes`)
                .then(response => response.json())
                .then((completedQuizzes) => {
                    setQuizzes(completedQuizzes)
                    // console.log("Initial state of tickets", tickets) // View the initial state of tickets
                })
            // When this array is empty, you are observing initial component state
        },
        []
    )
    //useEffect for matching the quiz.userId to users.id then setting the userResult/results(array)/or nothing

    useEffect(
        () => {
            if (quizzes) {
                const userQuizzes = quizzes.filter(quiz => quiz.userId === quizUserObject.id)
                setUserPastScores(userQuizzes)
            }
        },
        [quizzes]
    )

    //invoked by use effect that is observing toggle state

    const handleSaveButtonClick = () => {
        console.log('you clicked the button')
        // TODO: Create the object to be saved to the API
        const quizToSendToAPI = {
            userId: quizUserObject.id,
            userResult: average,
            timestamp: Date.now()
        }
    //client makes request and describes what action to be performed with
    //http methods like POST DELETE GET PUT
        return fetch(`http://localhost:8088/completedQuizzes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            //converts javascript to JSON string  
            body: JSON.stringify(quizToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/quizzes')
                // TODO: Perform the fetch() to POST the object to the API
            })
    }

    useEffect(
        () => {
            handleSaveButtonClick()
        },
        [toggle]
    )
    //functions to randomize photo selection

    const getRandomImgObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
    };

    const getRandomImgObjectTwo = (array) => {
        const randomObjectTwo = array[Math.floor(Math.random() * array.length)];
        return randomObjectTwo;
    };

    const getRandomImgObjectThree = (array) => {
        const randomObjectThree = array[Math.floor(Math.random() * array.length)];
        return randomObjectThree;
    };

    const getRandomImgObjectFour = (array) => {
        const randomObjectFour = array[Math.floor(Math.random() * array.length)];
        return randomObjectFour;
    };

    const getRandomImgObjectFive = (array) => {
        const randomObjectFive = array[Math.floor(Math.random() * array.length)];
        return randomObjectFive;
    };

    //useEffects that are observing the state of images variable
    //sets random image objects
    useEffect(
        () => {
            setRandomImageObj(getRandomImgObject(images))
        },
        [images]
    )

    useEffect(
        () => {
            setRandomImageObjTwo(getRandomImgObjectTwo(images))
        },
        [images]
    )

    useEffect(
        () => {
            setRandomImageObjThree(getRandomImgObjectThree(images))
        },
        [images]
    )

    useEffect(
        () => {
            setRandomImageObjFour(getRandomImgObjectFour(images))
        },
        [images]
    )

    useEffect(
        () => {
            setRandomImageObjFive(getRandomImgObjectFive(images))
        },
        [images]
    )

    //function to calculate the average of the year difference of choice and photo year taken

    const getAverageScore = () => {
        let sum = Math.abs(value - randomImageObj?.yearTaken) +
            Math.abs(value - randomImageObjTwo?.yearTaken) +
            Math.abs(value - randomImageObjThree?.yearTaken) +
            Math.abs(value - randomImageObjFour?.yearTaken) +
            Math.abs(value - randomImageObjFive?.yearTaken)
        let result = sum / 5
        setAverage(result)
    }
    
    //useEffect that observes toggle variable state change
    //invokes the getaveragescore function
    useEffect(
        () => {
            getAverageScore()
        },
        [toggle]
    )

    //function using state to refresh quiz
    const handleRefresh = () => {
        setToggle(!toggle)
        fetch(`http://localhost:8088/photos`)
            .then(response => response.json())
            .then((photoArr) => {
                setImages(photoArr)
                getRandomImgObject(images)
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
        <>
            <img src={randomImageObjTwo?.imgLink} onClick={randomImageObjTwo?.photoSummary} alt="photo" />
            {!toggle && (
                <div>

                    <RangeSlider
                        step={1.0}
                        min={1850}
                        max={2022}
                        value={valueTwo}
                        onChange={e => setValueTwo(e.target.value)}
                    />
                </div>
            )}
        </>
        <>
            <img src={randomImageObjThree?.imgLink} onClick={randomImageObjThree?.photoSummary} alt="photo" />
            {!toggle && (
                <div>

                    <RangeSlider
                        step={1.0}
                        min={1850}
                        max={2022}
                        value={valueThree}
                        onChange={e => setValueThree(e.target.value)}
                    />
                </div>
            )}
        </><>
            <img src={randomImageObjFour?.imgLink} onClick={randomImageObjFour?.photoSummary} alt="photo" />
            {!toggle && (
                <div>
                    <RangeSlider
                        step={1.0}
                        min={1850}
                        max={2022}
                        value={valueFour}
                        onChange={e => setValueFour(e.target.value)}
                    />
                </div>
            )}
        </>
        <>
            <img src={randomImageObjFive?.imgLink} onClick={randomImageObjFive?.photoSummary} alt="photo" />
            {!toggle && (
                <div>

                    <RangeSlider
                        step={1.0}
                        min={1850}
                        max={2022}
                        value={valueFive}
                        onChange={e => setValueFive(e.target.value)}
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
                <div>{valueTwo}</div>
                <div>{valueThree}</div>
                <div>{valueFour}</div>
                <div>{valueFive}</div>

                <div> Years Difference </div>
                <div>{Math.abs(value - randomImageObj?.yearTaken)}</div>
                <div>{Math.abs(value - randomImageObjTwo?.yearTaken)}</div>
                <div>{Math.abs(value - randomImageObjThree?.yearTaken)}</div>
                <div>{Math.abs(value - randomImageObjFour?.yearTaken)}</div>
                <div>{Math.abs(value - randomImageObjFive?.yearTaken)}</div>

                <div>Year Taken</div>
                <div>{randomImageObj.yearTaken}</div>
                <div>{randomImageObjTwo.yearTaken}</div>
                <div>{randomImageObjTwo.yearTaken}</div>
                <div>{randomImageObjTwo.yearTaken}</div>
                <div>{randomImageObjTwo.yearTaken}</div>
                
                <div>Your Score</div>
                <div>{average}</div>
                <div>Your Past Scores</div>
                {
                    userPastScores.map(
                        (score) => {
                            return <section className='score'>
                                <div>{score.userResult}</div>
                            </section>
                        }
                    )
                }
                <button onClick={() => { handleRefresh() }} className="btn btn-primary">Try Quiz Again</button>
                <button onClick={()=> navigate('/')} className="btn btn-primary">Back To Start</button>
                <div className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="/login" onClick={() => {
                        localStorage.removeItem("quiz_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </div>
            </>
        )}
    </>
}

//can't get the same object twice
//can't delete more then 5 photos
//if array.length is >= 5 then

  // useEffect(
    //     () => {
    //         getAllQuizzes()
    //     },
    //     [toggle]
    // )

    // const getAllQuizzes = () => {
    //     fetch(`http://localhost:8088/completedQuizzes`)
    //     .then(response => response.json())
    //     .then((quiz) => 
    //         setQuizzes(quiz)
    //         // console.log("Initial state of tickets", tickets) // View the initial state of tickets
    //     )
    // }

//random object func* 5 push all those objects in to an array and return those 5 random obj
//lable images with img1, img2, img, 3 etc
//map function to get photos and year
//display each photo.imglink with its own map function
//then compare users slider value choice number with the obj number.yearTaken
//display difference of each photo in the bottom toggle area
//maybe make slider below to show the year.taken of each photo as preset in the slider
//disable that slider

//i can make a seperate images component to randomize photos,
//instead of rendering the whole page, i only render the photo
//when button is clicked, the value is pushed into an array, etc.

//have an array to hold values for the 5 submits
//with every click of button 
//push value of slider into that array
//do an array method that adds all of those values together
//score will then be on results page

// images here to get date of image
// //make sure that they do not repeat with array method
// //create a getRandomImgObject, 1 ,2 3, 4, 5 and set them all invidually 
// //find out how to rerender different element in others place
// // have values for each object and slider 
// //or
// //only have it to where button can be pressed 5 times
// //each press has a use effect that saves that value to an array 

// //coult return an array of 5 photo objetcs, map, 
