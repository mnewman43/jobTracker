import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function List() {
    const jobs = [
        {company: "The Krusty Krab", salary: 40000},
        {company: "Wayne Enterprises", salary: 200000}
    ];
    const listJobs = jobs.map(jobs => <li key={jobs.company}>
        {jobs.company}, ${jobs.salary}</li>);
    return(<ul>{listJobs}</ul>)
}

export default List;