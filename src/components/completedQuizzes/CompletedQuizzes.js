import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const CompletedQuizzes = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [quizzes, setQuizzes] = useState([])


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

    // useEffect(
    //     () => {
    //         getAllPhotos()
    //     },
    //     []
    // )

    //honey raes claming tickets around 5 min mark

    const [newQuiz, update] = useState({
        "userId": 0,
        "userResult": 0,
        "timestamp": 0
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the newQuiz list
    */
    const navigate = useNavigate()
    const localHoneyUser = localStorage.getItem("quiz_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log('you clicked the button')

        // TODO: Create the object to be saved to the API
        const quizToSendToAPI = {
            userId: newQuiz.userId,
            userResult: newQuiz.userResult,
            timestamp: newQuiz.timestamp
        }

        return fetch(`http://localhost:8088/completedQuizzes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(quizToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/quizzes')
                // TODO: Perform the fetch() to POST the object to the API
            })
    }

    

// const deletePhoto = () => {
// deletePhoto(photo.id)
// 
//}
// user id matches conditional etc. display full quiz
return (
    <>
    <form className="ticketForm">
        <h2 className="ticketForm__title">Add Photo</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="photoName">Photo Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="photoName"
                    value={newQuiz.photoName}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.photoName = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        </form>
        </>
        }