import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Job(props) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <a className="jobButton" onClick={toggle}>{props.employer} - {props.title}<br/>
                {open &&
                    <div>
                        <p>
                            ${props.salary}/{props.salaryType}
                            <button className="delete" onClick={props.delete}>
                                Remove Job
                            </button>
                        </p>
                    </div>
                }
            </a>
        </div>
    )
}

export default Job;