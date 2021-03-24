import React from 'react';
import '../styles/Connexion.scss'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import signup from '../images/Sign-up-img.svg';
import signin from '../images/Sign-in-img.svg';


const sign_up_btn_clicked = () => {
    const container = document.querySelector(".container");
    container.classList.add("right-panel-active");
}

const sign_in_btn_clicked =  () => {
    const container = document.querySelector(".container");
    container.classList.remove("right-panel-active");
}

const Connexion = () => {
    return (
        <>
            <Navbar />
                <div className="Connexion">
                    <div class="container" id="container">
                        <div class="form-container sign-up-container">
                            <form action="">
                            <h1>Inscription</h1>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button>S'inscrire</button>
                            </form>
                        </div>
                        <div class="form-container sign-in-container">
                            <form action="#">
                            <h1>Connexion</h1>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <a href="#">Mot de passe oublié?</a>

                            <button>Se connecter</button>
                            </form>
                        </div>
                        <div class="overlay-container">
                            <div class="overlay">
                                <div class="overlay-panel overlay-left">
                                    <h2>Déjà inscrit?</h2>
                                    <button class="ghost" id="signIn" onClick={sign_in_btn_clicked}>Se connecter</button>
                                </div>
                                <div class="overlay-panel overlay-right">
                                    <h2>Vous êtes nouveau?!</h2>
                                    <button class="ghost" id="signUp" onClick={sign_up_btn_clicked}>S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
};

export default Connexion