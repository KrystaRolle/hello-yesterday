import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const AddPhoto = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [photos, setPhotos] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/photos`)
                .then(response => response.json())
                .then((photoArr) => {
                    setPhotos(photoArr)
                    // console.log("Initial state of tickets", tickets) // View the initial state of tickets
                })
            // When this array is empty, you are observing initial component state
        },
        []
    )

    const [newPhoto, update] = useState({
        "photoName": "",
        "imgLink": "",
        "yearTaken": 0,
        "location": "",
        "photoSummary": ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the newPhoto list
    */
    const navigate = useNavigate()
    //const localQuizUser = localStorage.getItem("quiz_user")
    //const quizUserObject = JSON.parse(localQuizUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log('you clicked the button')

        // TODO: Create the object to be saved to the API
        const photoToSendToAPI = {
            photoName: newPhoto.photoName,
            imgLink: newPhoto.imgLink,
            yearTaken: newPhoto.yearTaken,
            location: newPhoto.location,
            photoSummary: newPhoto.photoSummary
        }

        return fetch(`http://localhost:8088/photos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(photoToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/addphotos')
                getAllPhotos()
                // TODO: Perform the fetch() to POST the object to the API
            })
    }

    const getAllPhotos = () => {
        fetch(`http://localhost:8088/photos`)
        .then(response => response.json())
        .then((photoArr) => 
            setPhotos(photoArr)
            // console.log("Initial state of tickets", tickets) // View the initial state of tickets
        )
    }

// const deletePhoto = () => {
// deletePhoto(photo.id)
// 
//}

return (
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
                    value={newPhoto.photoName}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.photoName = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="imgLink">Image Link:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="imgLink"
                    value={newPhoto.imgLink}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.imgLink = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>


        <fieldset>
            <div className="form-group">
                <label htmlFor="yearTaken">Year Taken:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="yearTaken"
                    value={newPhoto.yearTaken}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.yearTaken = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="location"
                    value={newPhoto.location}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.location = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="photoSummary">Photo Summary</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder=" Photo Summary"
                    value={newPhoto.photoSummary}
                    onChange={
                        (evt) => {
                            const copy = { ...newPhoto }
                            copy.photoSummary = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit Photo
        </button>
        <button onClick={()=> navigate('/')} className="btn btn-primary">Back To Start</button>   


        <article>
            {
                photos.map(
                    (photo) => {
                        return <section className='photo'>
                            <img src={photo?.imgLink} key={photo.id} />
                        </section>
                    }
                    )
                }
        </article>
    </form>
)
}


