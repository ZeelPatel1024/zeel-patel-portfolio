import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HashLink as Link} from "react-router-hash-link";
import Logo from '../Images/logo.png'

function Navbar() {

    const [menuOpen,setMenuOpen] = useState(false);

    return (
        <nav>
            {/* <div className="headerBox"> */}
                {/* <img style ={{width: 50, height: 50}}  src={Logo}></img> */}
                <Link smooth spy to="#" className="title">Zeel Patel</Link>
            {/* </div> */}

            <div className="menu" onClick={()=> {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link smooth spy to="#about" >About</Link>
                </li>
                <li>
                    <Link smooth spy to="#experience">Experience</Link>
                </li>
                <li>
                    <Link smooth spy to="#projects">Projects</Link>
                </li>
                {/* <li>
                    <Link smooth spy to="#contact">Contact</Link>
                </li> */}
            </ul>
        </nav>
    );
  }
  
  export default Navbar;