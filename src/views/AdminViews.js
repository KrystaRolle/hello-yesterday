import { Outlet, Routes, Route } from "react-router-dom"
import { Instructions } from "../components/instructions/Instructions"
import { useNavigate } from "react-router-dom"
import { Quizzes } from "../components/quizzes/Quizzes"
import { AddPhoto } from "../components/addPhotos/AdminAddPhotos"
import { AdminDelete } from "../components/delete/AdminDelete"
import { Quizly } from "../components/quizzes/QuizTesting"
export const AdminViews = () => {
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
                    <button onClick={()=> navigate('/addphotos')}>Add Photos</button>   
                    <button onClick={()=> navigate('/deletephotos')}>Delete Photos</button> 
                    <button onClick={() => navigate("/quizzes")}>Skip Tutorial</button>
                    <button onClick={() => navigate("/instructions")}>OK, Let's Start</button>
                    <Outlet />
                </>
            }>
            </Route>
            <Route path="deletephotos" element={<AdminDelete/>}/>
            <Route path="addphotos" element={<AddPhoto/>}/>
            <Route path="/" element={<AdminViews />}/>
            <Route path="instructions" element={<Instructions />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="quizzes" element={<Quizly />} />
            </Routes>
        </>
    )
}

