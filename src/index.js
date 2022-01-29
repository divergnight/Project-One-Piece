import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import AccueilPage from './Pages/AccueilPage/AccueilPage'
import Page from './Pages/Page/Page'
import AddPage from './Pages/AddPage/AddPage'
import UpdatePage from './Pages/UpdatePage/UpdatePage'


ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page/add" element={<AddPage />} />
          <Route path="/page/:id" element={<UpdatePage />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

