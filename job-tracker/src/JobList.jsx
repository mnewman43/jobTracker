import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function JobList() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const[jobs, setJobs] = useState([]);
    const[jobEmployer, setJobEmployer] = useState("");
    const[jobTitle, setJobTitle] = useState("");
    const[jobSalary, setJobSalary] = useState(0);
    const[jobSalaryType, setJobSalaryType] = useState("");

    function handleAddJob() {
        const newJob = {
            employer: jobEmployer,
            title: jobTitle,
            salary: jobSalary,
            salaryType: jobSalaryType
        };
        setJobs(j => [...j, newJob]);

        setJobEmployer("");
        setJobTitle("");
        setJobSalary(0);
        setJobSalaryType(hour);
    }

    function handleEmployerChange(event) {
        setJobEmployer(event.target.value);
    }
    function handleTitleChange(event)   {
        setJobTitle(event.target.value);
    }
    function handleSalaryChange(event)  {
        setJobSalary(event.target.value);
    }
    function handleSalaryTypeChange(event)  {
        setJobSalaryType(event.target.value);
    }

    return(
        <div>
            <button onClick={toggle}>+ Add Job</button><br/>
            {open && (
                <div>
                    <p>Employer</p>
                    <input type="text" id="employer" value={jobEmployer}
                    onChange={handleEmployerChange}/><br/>

                    <p>Job Title</p>
                    <input type="text" id="title" value={jobTitle}
                    onChange={handleTitleChange}/><br/>

                    <p>Salary/Wage</p>
                    <input type="number" id="salary" value={jobSalary}
                    onChange={handleSalaryChange}/><br/>

                    <p>Payment Frequency</p>
                    <select value={jobSalaryType}
                    onChange={handleSalaryTypeChange}>
                        <option value="select"></option>
                        <option value="hour">hour</option>
                        <option value="month">month</option>
                        <option value="year">year</option>
                    </select>

                    <button onClick={handleAddJob}>Submit</button>
                </div>
            )}
            <h3>Job List</h3>
            <div className="list">
                <ul>
                    {jobs.map((job, index) => 
                        <li key={index}>
                            {job.employer} - {job.title}
                            , ${job.salary}/{job.salaryType}
                        </li>,)}
                </ul>
            </div>
        </div>
    )
}

export default JobList;