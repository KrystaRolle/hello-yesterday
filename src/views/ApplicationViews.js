import { NonAdminViews } from "./NonAdminViews"
import { AdminViews } from "./AdminViews"
// path = "/" means anything
//element is html and calls functions
//routes give options for what application should do
//outlet is what tells parent route to display with child routes
//if being displayed
//make sibling route (outside tags) if you want either to display independently  
export const ApplicationViews = () => {
    const localHoneyUser = localStorage.getItem('quiz_user')
    const honeyUserObject = JSON.parse(localHoneyUser)
   if (honeyUserObject.staff) {
    return <AdminViews/>
   }
   else {
    return <NonAdminViews/>
   }
}
