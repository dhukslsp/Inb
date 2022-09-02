import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  const isLoggedIn = localStorage.getItem("tocken")!=null ? true:false;
  console.log(isLoggedIn);
  const  logout = () =>{
    localStorage.clear();
    console.log(isLoggedIn);
    window.location.reload();
  }
    return (
        <nav className="navbar navbar-expand-lg bg-light font-extrabold">
        <div className="container-fluid">
          <a className="navbar-brand" href = "/">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>{
            isLoggedIn
        ? <button   className="btn btn-outline-success m-1" type="submit" onClick={logout}>Sign Out</button>
        : <div><button className="btn btn-outline-success m-1" type="submit"><Link className="nav-link" to="/login">Login</Link></button><button className="btn btn-outline-success m-1" type="submit"><Link className="nav-link" to="/signup">Sign Up</Link></button></div>}
          </div>
        </div>
      </nav>
    )
}

export default Navbar