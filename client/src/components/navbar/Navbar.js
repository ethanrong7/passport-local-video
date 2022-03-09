import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/budget">Budget</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}




