import {Link, Outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Job Tracker</a></li>
                    <li><a href="/joblist">Job List</a></li>
                    <li><a href="/Calendar">Calendar</a></li>
                </ul>
            </nav>
            <Outlet/>
    </>
    )
}

export default Layout;