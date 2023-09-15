// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Favs from './Routes/Favs.jsx'
import Detail from './Routes/Detail.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
