import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="App-header">
                <Link to="/"><h1>BOOK YOUR SHOW</h1></Link>
        </header>
    );
}


export default Header;