import { NonAdminViews } from "./NonAdminViews"
import { AdminViews } from "./AdminViews"
// path = "/" means anything
//element is html and calls functions
//routes give options for what application should do
//outlet is what tells parent route to display with child routes
//if being displayed
//make sibling route (outside tags) if you want either to display independently  
export const ApplicationViews = () => {
    const localQuizUser = localStorage.getItem('quiz_user')
    const quizUserObject = JSON.parse(localQuizUser)
   if (quizUserObject.staff) {
    return <AdminViews/>
   }
   else {
    return <NonAdminViews/>
   }
}

//checks the quiz user object to see if they are staff or not to determine the view of the user
