import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export const PastScores = () => {
    const [quizzes, setQuizzes] = useState([])
    const [userPastScores, setUserPastScores] = useState([])
    const localQuizUser = localStorage.getItem('quiz_user')
    const quizUserObject = JSON.parse(localQuizUser)

    const navigate = useNavigate()

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


    useEffect(
        () => {
            if (quizzes) {
                const userQuizzes = quizzes.filter(quiz => quiz.userId === quizUserObject.id)
                setUserPastScores(userQuizzes)
            }
        },
        [quizzes]
    )

    return <>
        <div>Your Past Scores</div>
        {
            userPastScores.map(
                (score) => {
                    return <><section className='score'>
                        <div key={score.id}> {score.userResult}</div>
                    </section>
                    </>
                }
            )
        }
        <button onClick={() => navigate("/quizzes")}>Retake Quiz</button>
        <div className="navbar__item navbar__logout">
            <Link className="navbar__link" to="/login" onClick={() => {
                localStorage.removeItem("quiz_user")
                navigate("/", { replace: true })
            }}>Logout</Link>
        </div>
    </>
}