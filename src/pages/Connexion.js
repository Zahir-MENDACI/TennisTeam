import React from 'react';
import '../styles/Connexion.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import signup from '../images/Sign-up-img.svg';
import signin from '../images/Sign-in-img.svg';


const sign_up_btn_clicked = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
}

const sign_in_btn_clicked =  () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
}

const Connexion = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">

                        <form action="#" className="sign-in-form">
                            <h2 className="title">Se connecter</h2>
                            <div className="input-field">
                                <PersonIcon className="input-icons" />
                                <input type="text" placeholder="Nom d'utilisateur" />
                            </div>
                            <div className="input-field">
                                <LockIcon className="input-icons"/>
                                <input type="password" placeholder="Mot de passe" />
                            </div>
                            <input type="submit" value="Se connecter" className="btn solid" />
                        </form>

                        <form action="#" className="sign-up-form">
                            <h2 className="title">S'inscrire</h2>
                            <div className="input-field">
                                <PersonIcon className="input-icons"/>
                                <input type="text" placeholder="Nom d'utilisateur" />
                            </div>
                            <div className="input-field">
                                <EmailIcon className="input-icons"/>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <LockIcon className="input-icons"/>
                                <input type="password" placeholder="Mot de passe" />
                            </div>
                            <input type="submit" className="btn" value="S'inscrire" />
                
                        </form>
                    </div>
                </div>
    
                <div className="panels-container">

                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Nouveau ici ?</h3>
                            <p>
                                Inscription 100% en ligne : Inscrivez-vous sans vous déplacer!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={sign_up_btn_clicked}>
                                S'inscrire
                            </button>
                        </div>
                        <img src={signin} className="image" alt="Sign-in-img" />
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Vous êtes déjà inscrit ?</h3>
                            <p>
                                Connectez-vous pour profitez de nos offres d'abonnement!
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={sign_in_btn_clicked}>
                                Se connecter
                            </button>
                        </div>
                        <img src={signup} className="image" alt="Sign-up-img" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Connexion