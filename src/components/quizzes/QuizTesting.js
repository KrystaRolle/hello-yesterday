import { useEffect, useState } from "react";
import RangeSlider from 'react-bootstrap-range-slider';

export const Quizly = () => {

    const [value, setValue] = useState(1975)
    const [counter, setCounter] = useState(0)
    const [images, setImages] = useState([])
    const [fivePhotos, setFivePhotos] = useState([])
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
        const imagesArr = [];
        for (let i = 0; i < 6; i++) {
            const randomObject = array[Math.floor(Math.random() * array.length)];
            let index = array.indexOf(randomObject)
            array.splice(index, 1)
            imagesArr.push(randomObject)
        }
        return imagesArr;
    };

    useEffect(
        () => {
            setFivePhotos(getRandomImgObject(images))
            displayPhotos(fivePhotos)
        },
        []
    )

    const counts = () => {
        setCounter(counter + 1)
    }
    //five photos argument
    const displayPhotos = (arr) => {
        
    }

    const values = () => {
        const userChoiceArr = []
        userChoiceArr.push()
        return userChoiceArr
    }

    useEffect(
        () => {
            const userChoiceArr = []
            setValue(value)
            userChoiceArr.push(value)
        },
        [counter]
    )
    //can use useEffect for when count changes
    const submitBtnClick = () => {
        values()
        counts()
    }
    // const userChoicePhotoYear = (photoArr, userChoiceArr) = {

    // }
    return <>
       
       {
            fivePhotos.map(
                (photos) => {
                    if (counter === 0) {
                        return <img src={photos[0]?.imgLink} />
                    }
                    else if (counter === 1) {
                        return <img src={photos[1]?.imgLink} />
                    }
                    else if (counter === 2) {
                        return <img src={photos[2]?.imgLink} />

                    } else if (counter === 3) {
                        return <img src={photos[3]?.imgLink} />

                    } else if (counter === 4) {
                        return <img src={photos[4]?.imgLink} />
                    } else if (counter === 5) {
                        return setToggle(true)
                    }
                }
            )
        }
        
        {toggle && (
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
        {toggle && (
            <button onClick={setCounter(counter+=1)}></button>
        )}
    </>
}


// import { useEffect, useState } from "react"
// import React from "react"
// import RangeSlider from 'react-bootstrap-range-slider'

// export const Quizzes = () => {

//     const [value, setValue] = useState([])
//     const [counter, setCounter] = useState(0)
//     const [images, setImages] = useState([])
//     const [fivePhotos, setFivePhotos] = useState([])
//     const [toggle, setToggle] = useState(false)
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

//     // const getRandomImgObject = (array) => {
//     //    const imagesArr = [];
//     //     for (let i = 0; i < 6; i++) {
//     //         const randomObject = array[Math.floor(Math.random() * array.length)];
//     //         let index = array.indexOf(randomObject)
//     //         array.splice(index, 1)
//     //         imagesArr.push(randomObject)
//     //     }
//     //    return imagesArr;
//     // };

//     useEffect(
//         () => {
//             setFivePhotos(images)
//             //DisplayPhotos()
//         },
//         []
//     )

//     const counts = () => {
//         setCounter(counter + 1)
//     }
//     //five photos argument
//     const DisplayPhotos = () => {
//             fivePhotos.map(
//                 (photos) => {
//                     if (counts === 0) {
//                         return <img src={photos[0]?.imgLink} />
//                     }
//                     else if (counts === 1) {
//                         return <img src={photos[1]?.imgLink} />
//                     }
//                     else if (counts === 2) {
//                         return <img src={photos[2]?.imgLink} />

//                     } else if (counts === 3) {
//                         return <img src={photos[3]?.imgLink} />

//                     } else if (counts === 4) {
//                         return <img src={photos[4]?.imgLink} />
//                     } else if (counts === 5) {
//                         return setToggle(true)
//                     }
//                 }
//             )
//             }

//     const values = () => {
//         const userChoiceArr = []
//         userChoiceArr.push(value)
//         return userChoiceArr
//     }

//     useEffect(
//         () => {
//             setFivePhotos(images)
//             //DisplayPhotos()
//         },
//         [submits]
//     )

//     // useEffect(
//     //     () => {
//     //         const userChoiceArr = []
//     //         setValue(value)
//     //         userChoiceArr.push(value)
//     //     },
//     //     [counter]
//     // )
//     //can use useEffect for when count changes
//     const submitBtnClick = () => {
//         values()
//         counts()
//     }
//     // const userChoicePhotoYear = (photoArr, userChoiceArr) = {

//     // }
//     return <>
//         {DisplayPhotos}
//         {!toggle && (
//             <div>
//                 <RangeSlider
//                     step={1.0}
//                     min={1850}
//                     max={2022}
//                     value={value}
//                     onChange={e => setValue(e.target.value)}
//                 />
//             </div>
//         )}
//         {toggle && (
//             <button onClick={submitBtnClick()}></button>
//         )}
//     </>
// }

    //function should already have the five photos
//make photos appear one at a time
//one photo
//one slider
//on each button slick it triggers a function that pushes the value into array
//and another function that displays the next photo
//conditional that only accepts 5 values.
//once this condition meets the 5 values insert toggle switch 
//return this array 
//display all photos with their information, and display the 5 values
//button takes you to see past scores with an option to play again

//value, set value
//on 1st click function
// 2 things happen. value is saved and pushed into array
//next photo displayed (function)

//long if else statement
//set all images with a state
//if 

// import { useEffect, useState } from "react"
// import React from "react"
// import RangeSlider from 'react-bootstrap-range-slider'

// export const Quizzes = () => {

//     const [value, setValue] = useState(1975)
//     const [counter, setCounter] = useState(0)
//     const [images, setImages] = useState([])
//     const [fivePhotos, setFivePhotos] = useState([])
//     const [toggle, setToggle] = useState(false)
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

//     // const getRandomImgObject = (array) => {
//     //    const imagesArr = [];
//     //     for (let i = 0; i < 6; i++) {
//     //         const randomObject = array[Math.floor(Math.random() * array.length)];
//     //         let index = array.indexOf(randomObject)
//     //         array.splice(index, 1)
//     //         imagesArr.push(randomObject)
//     //     }
//     //    return imagesArr;
//     // };

//     useEffect(
//         () => {
//            // setFivePhotos(images)
//             //DisplayPhotos()
//         },
//         []
//     )

//     const counts = () => {
//         setCounter(counter + 1)
//     }
//     //five photos argument
//     const DisplayPhotos = () => {
//             // images.map(
//             //     (photos) => {
//                     if (counts === 0) {
//                         return <img src={images[0].imgLink} />
//                     }
//                     else if (counts === 1) {
//                         return <img src={images[1]?.imgLink} />
//                     }
//                     else if (counts === 2) {
//                         return <img src={images[2]?.imgLink} />

//                     } else if (counts === 3) {
//                         return <img src={images[3]?.imgLink} />

//                     } else if (counts === 4) {
//                         return <img src={images[4]?.imgLink} />
//                     } else if (counts === 5) {
//                         return setToggle(true)
//                     }
//             //     }
//             // )
//             }

//     const values = () => {
//         const userChoiceArr = []
//         userChoiceArr.push(value)
//         return userChoiceArr
//     }

//     // useEffect(
//     //     () => {
//     //         const userChoiceArr = []
//     //         setValue(value)
//     //         userChoiceArr.push(value)
//     //     },
//     //     [counter]
//     // )
//     //can use useEffect for when count changes
//     const submitBtnClick = () => {
//         values()
//         counts()
//     }
//     // const userChoicePhotoYear = (photoArr, userChoiceArr) = {

//     // }
//     return <>
//      <div>What Year Was This Taken</div>
//      <DisplayPhotos />
//         {!toggle && (
//             <div>
//                 <RangeSlider
//                     step={1.0}
//                     min={1850}
//                     max={2022}
//                     value={value}
//                     onChange={e => setValue(e.target.value)}
//                 />
//             <button onClick={submitBtnClick()}></button>
//             </div>
//         )}
       
//     </>
// }