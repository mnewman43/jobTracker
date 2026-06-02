import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './Layout.jsx'
import JobList from './JobList.jsx'
import Calendar from './Calendar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<JobList/>}/>
          <Route path="calendar" element={<Calendar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
