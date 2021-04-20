import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { NavLink } from "react-router-dom";
import BtnToggle from "./BtnToggle/BtnToggle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const auth = localStorage.getItem("Authentification");
    if (auth) {
      setIsLogged(true);
      console.log("auth = ", auth);
      console.log("is logged = ", isLogged);
    } else {
      console.log("their is no  Authentification items! ", auth);
    }
    console.log("is logged = ", isLogged);
  }, []);

  function toggleMobileMenu() {
    document.querySelector(".mobile-bar").classList.toggle("active");
  }

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("Authentification");
    window.location.href = "/Connexion";
  };

  return (
    <div class="Navbar">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <BtnToggle className="btn" />
      <nav>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li>
            <NavLink exact to="/Accueil" onClick={closeMobileMenu}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Coach" onClick={closeMobileMenu}>
              Club
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Planning" onClick={closeMobileMenu}>
              Planning
            </NavLink>
          </li>
          <li>
            <NavLink exact to="Abonnement" onClick={closeMobileMenu}>
              Abonnements
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Covid" onClick={closeMobileMenu}>
              Covid-19
            </NavLink>
          </li>
          {isLogged ? (
            <li>
              <NavLink
                className="login mobile"
                to="/Connexion"
                onClick={logout}
              >
                Se déconnecter
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="login mobile"
                exact
                to="/Connexion"
                onClick={closeMobileMenu}
              >
                Se connecter
              </NavLink>
            </li>
          )}
        </ul>
        {isLogged ? (
          <NavLink className="login" to="/Connexion" onClick={logout}>
            Se déconnecter
          </NavLink>
        ) : (
          <NavLink className="login" exact to="/Connexion">
            Se connecter
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;