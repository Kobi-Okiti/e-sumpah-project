import React from 'react';
import menuicon from '../assets/Menu.png';
import miniLogo from '../assets/miniLogo.png';
import profile from '../assets/profile.png';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav>
                <div id='nav-group-1'>
                    <img src={menuicon} alt="Menu Icon" id='menuicon'/>
                    <img src={miniLogo} alt="Mini Logo" id='minilogo'/>
                </div>
                <div id='nav-group-2'>
                    <img src={profile} alt="Profile Picture" id='profilepic'/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
