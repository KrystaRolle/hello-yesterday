import { useState, useEffect } from "react"

export const AdminDelete = () => {
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
            .then(
                    getAllPhotos()
                
            )
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
                                    
                                    <button onClick={() => { deletePhoto(photo.id) }}>Delete</button>
                                </section>
                            </>
                        }
                    )
                }
            </article>
        </>
    )
}