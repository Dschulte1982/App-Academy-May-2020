import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/' activeClassName='is-selected' exact={true}>Home</NavLink></li>
                    <li><NavLink to='/staff' activeClassName='is-selected'>Staff</NavLink></li>
                    <li><NavLink to='/about' activeClassName='is-selected'>About Us</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
