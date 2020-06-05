import React from 'react';
import logo from '../../assets/logo.png'

// import { Container } from './styles';

const Header = () => {
    return (
        <>
            <header className="fct-header">
                <div>
                    <img src={logo}/>
                </div>
            </header>
        </>

    );
}

export default Header;