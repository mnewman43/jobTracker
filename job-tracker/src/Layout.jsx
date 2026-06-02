import {Link, Outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
            <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Job Tracker</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">Job List</Link>
                                </li>
                                <li>
                                    <Link to="/Calendar">Calendar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet/>
    </>
    )
}

export default Layout;