import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <h1>Welcome to my website!</h1>
                <nav>
                    <ul>
                        <li>
                           <Link to='/'>Home</Link>
                        </li>
                        <li>
                           <Link to='/'>About</Link>
                        </li>
                        <li>
                           <Link to='/'>Services</Link>
                        </li>
                        <li>
                           <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header