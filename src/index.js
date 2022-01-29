import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import AccueilPage from './Pages/AccueilPage/AccueilPage'
import Page from './Pages/Page/Page'
import AddPage from './Pages/AddPage/AddPage'
import UpdatePage from './Pages/UpdatePage/UpdatePage'
import Redirect from './Pages/Redirect/Redirect'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<header>
				<AppNavbar />
			</header>
			<Routes>
				<Route index element={<AccueilPage />} />

				<Route path="/op-members/:group" element={<Outlet />}>
					<Route index element={<Page />} />
					<Route path="add" element={<AddPage />} />
					<Route path="edit-:index" element={<UpdatePage />} />
				</Route>

				<Route path="*" element={<Redirect />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
