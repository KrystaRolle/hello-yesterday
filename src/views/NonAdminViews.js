import { Outlet, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { Instructions } from "../components/instructions/Instructions"
import { useNavigate } from "react-router-dom"
//import { Choices } from "../components/scores/Choices"
import { Quizzes } from "../components/quizzes/Quizzes"

export const NonAdminViews = () => {
    const navigate = useNavigate()

    return (
        <>
        <Routes>
            <Route path="/" element={
                <>
                    <h1>HelloYesterday</h1>

                    <div>
                        This quiz will test you on your history skills. Pick the year you think the event occured
                    </div>  
                    <button onClick={() => navigate("/quizzes")}>Skip Tutorial</button>
                    <button onClick={() => navigate("/instructions")}>OK, Let's Start</button>
                    <Outlet />
                </>
            }>
            </Route>
            <Route path="instructions" element={<Instructions />} />
            <Route path="quizzes" element={<Quizzes />} />
            </Routes>
        </>
    )
}