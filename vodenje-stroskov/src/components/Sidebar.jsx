// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

    function Sidebar() {
        return (
            <div className="sidebar">Sidebar
                <h2 class="menu-text">Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>vsi stroski</li>
                    <li>stroski po oddelkih</li>
                    <li>vnos stroskov</li>
                    <li class="kontakt">Kontakt</li>
                    <li class="redcolor">Info</li>
                    <li alt="Razvijalci">Razvijalci</li>
                </ul>
            </div>
    );
}

export default Sidebar;