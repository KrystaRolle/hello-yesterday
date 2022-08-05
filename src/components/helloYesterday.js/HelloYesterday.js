import { Route, Routes } from "react-router-dom"
import { Authorized } from "../../views/Authorized"
import { ApplicationViews } from "../../views/ApplicationViews"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"


export const HelloYesterday = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

//path is a prop that says a componenet should be rendered to change the UI
//Route declares an element should be switched depending on route state. 
//Router creates a history object that is used to keep track of current location and rerenders on change 
//in location. Derives from application URL
//user can input a URL into the browser
//and if this URL path matches any 'route' inside the router file
//user will be directed to that route
//if path is anything you have to run path="*"