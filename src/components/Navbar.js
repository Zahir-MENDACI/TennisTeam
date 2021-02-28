import React, { useState } from 'react'
// https://reactrouter.com/web/example/basic
import './Navbar.scss';
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import {NavLink} from "react-router-dom"



const Navbar = () => {
    function toggleMobileMenu (){
        document.querySelector('.mobile-bar').classList.toggle('active')
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    return (
            <div class="Navbar">
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <CloseMenu className="menu-icon" />
                    ) : (
                    <MenuIcon className="menu-icon" />
                    )}
                </div>
                <nav>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li>
                            <NavLink exact to = "/" onClick={closeMobileMenu}>Accueil</NavLink> 
                        </li>
                        <li>
                            <NavLink exact to = "Coach" onClick={closeMobileMenu}>Club</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/Planning" onClick={closeMobileMenu}>Planning</NavLink> 
                        </li>
                        <li>
                            <NavLink exact to = "/Connexion" onClick={closeMobileMenu}>Se connecter</NavLink> 
                        </li>
                        <li>
                            <NavLink exact to = "Abonnement" onClick={closeMobileMenu}>Abonnements</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/Contact" onClick={closeMobileMenu}>Contact</NavLink> 
                        </li>
                        <li>
                            <NavLink exact to = "/Covid19" onClick={closeMobileMenu}>Covid-19</NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
    )
}



export default Navbar

// <div className="Navbar">
// <nav className="container" id="container">
    // <ul>
        // <li>
        //     <NavLink exact to = "/">Accueil</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "Coach">Club</NavLink>
        // </li>
        // <li>
        //     <NavLink exact to = "/">Planning</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "/">S'inscrire</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "Abonnement">Abonnements</NavLink>
        // </li>
        // <li>
        //     <NavLink exact to = "/">Contact</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "/">Covid-19</NavLink> 
        // </li>
    // </ul>
//     <div className="mobile-bar" onClick={toggleMobileMenu}> 
//         <span></span>
//         <span></span>
//         <span></span>
//     </div>
// </nav>
// </div>
