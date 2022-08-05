import { Outlet, Routes, Route } from "react-router-dom"
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

//useNavigate hook returns a function that lets you navigate through the program/changes the location
//this is the "start page of the application"
//outlet renders a child route
//any component that's rendered by another component is a child/ component that renders is the parent
// Route is the shown component when path matches the current URL
// Link component works like HTML anchor tag