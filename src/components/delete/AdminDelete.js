import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const AdminDelete = () => {
    const [photos, setPhotos] = useState([])
    const navigate = useNavigate()
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

    const getAllPhotos = () => {
        fetch(`http://localhost:8088/photos`)
            .then(response => response.json())
            .then((photoArr) =>
                setPhotos(photoArr)
                // console.log("Initial state of tickets", tickets) // View the initial state of tickets
            )
    }


    function deletePhoto(id) {
        fetch(`http://localhost:8088/photos/${id}`, {
            method: 'DELETE',
        })
            .then(getAllPhotos)
    }

    return (
        <>
            <h2>Delete</h2>
            <article>
                {
                    photos.map(
                        (photo, i) => {
                            return <>
                                <section className='photo'>
                                    <img src={photo?.imgLink} key={i} />

                                    <button onClick={() => { deletePhoto(photo.id) }} className="btn btn-primary">Delete</button>
                                </section>
                            </>
                        }
                    )
                }
                <button onClick={() => navigate('/')} className="btn btn-primary">Back To Start Page</button>
        </article>
        </>
    )
}