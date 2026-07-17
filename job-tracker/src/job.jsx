import { useState } from 'react'
import './App.css'

function Job(props) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <a className="jobButton" onClick={toggle}><h3>{props.employer} - {props.title}</h3><br/>
                {open &&
                    <div>
                        <p>
                            ${props.salary}/{props.salaryType} <br/>
                            Applied on: {props.dateSubmit}
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