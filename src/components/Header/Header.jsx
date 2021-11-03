import React from 'react';
import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                
                <Link className="logo" to="/">
                    <Logo/>
                </Link>
            </div>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
            </div>
            
        </div>
    )
}


export default Header
