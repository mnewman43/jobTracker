import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import List from './list.jsx'

function JobList() {
    return(
        <div>
            <h3>Job List</h3>
            <List/>
        </div>
    )
}

export default JobList;