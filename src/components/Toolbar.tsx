import { Component } from "react";
import { Link } from "react-router-dom";



class Toolbar extends Component{
    render() {
        return(
            <section>
                <nav className="navbar">
                    
                    <ul className="nav-list">
                    <h1 className="nav-title"><Link to='/' className="nav-items">Home Page</Link></h1>
                        <li className="nav-item">
                            <Link to='/' className="nav-items">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/users' className="nav-items">User</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Toolbar;