import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
    <footer className="py-5 text-center">
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <NavLink to="/categories" className="nav-link" activeClassName="active">
                    <img className="imageButton" src="/images/categories.png" />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/locations" className="nav-link" activeClassName="active">
                    <img className="imageButton" src="/images/locations.png" />
                </NavLink>
            </li>
        </ul>
    </footer>
);

export default Footer;
