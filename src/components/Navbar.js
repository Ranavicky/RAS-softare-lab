import React from 'react';
import '../App.css';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

function Navbar() {

    

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    if(isAuth == true)
    {
        var decoded = jwt_decode(token);
        var username = decoded.name;
    }

    return (
        <section className="navbar">
            <div className="logo">    
                <Link to="/customer/home" className="ras-brand nav-link" style={{ textDecoration: 'none', color: 'black' }}>RAS</Link>
            </div>
            <ul className="nav-list">         
                <>
                    <li className="current-user-info">Welcome, <strong>{username}</strong></li>
                    <li><Link to="/home" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                    <li><Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Your Orders</Link></li>
                    <li><Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></li>
                    <li className="nav-link"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></li>
                </>         
            </ul>
        </section>
    )
}

export default Navbar;