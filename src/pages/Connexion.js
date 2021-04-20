import React, { useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import signup from '../images/Sign-up-img.svg';
import signin from '../images/Sign-in-img.svg';
import { ThemeContext } from '../config/Context/ThemeContext';



const Connexion = () => {
    
    const {theme} = useContext(ThemeContext) 
    
    const sign_up_btn_clicked = () => {
        const container = document.querySelector(".container");
        container.classList.add("sign-up-mode");
    }
    
    const sign_in_btn_clicked =  () => {
        const container = document.querySelector(".container");
        container.classList.remove("sign-up-mode");
    }
    

        const [user, setUser] = useState({
            username: '',
            email:'', 
            password: '' 
        })
    
        const onChangeInput = e =>{
            const {name, value} = e.target;
            setUser({...user, [name]:value})
        }
    
        const loginSubmit = async e =>{
            e.preventDefault()
            try {
                const response = await axios.post('http://localhost:8080/api/v1/users/login', {...user})
                localStorage.setItem('Authentification', JSON.stringify(response.data))
                window.location.href = "/";
                alert('you have been loged successfully!')
            } catch (err) {
                alert(err)
            }
        }
    
        const registerSubmit = async e =>{
            e.preventDefault()
            try {
                const response = await axios.post('http://localhost:8080/api/v1/users', {...user})
                localStorage.setItem('Authentification', JSON.stringify(response.data))
                window.location.href = "http://localhost:3000/Connexion";
                alert('you have been registered successfully!')
            } catch (err) {
                alert(err)
            }
        }
        
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar />
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">

                        <form onSubmit={loginSubmit} className="sign-in-form">
                            <h2 className="title">Se connecter</h2>
                            <div className="input-field">
                                <PersonIcon className="input-icons" />
                                <input type="email" placeholder="Email" name="email" value={user.email} onChange={onChangeInput} />
                            </div>
                            <div className="input-field">
                                <LockIcon className="input-icons"/>
                                <input type="password" placeholder="Mot de passe" name="password" value={user.password} onChange={onChangeInput}/>
                            </div>
                            <input type="submit" value="Se connecter" className="btn solid" />
                        </form>

                        <form onSubmit={registerSubmit} className="sign-up-form">
                            <h2 className="title">S'inscrire</h2>
                            <div className="input-field">
                                <PersonIcon className="input-icons"/>
                                <input type="text" placeholder="Prénom" name="firstName" value={user.firstName} onChange={onChangeInput}/>
                            </div>
                            <div className="input-field">
                                <PersonIcon className="input-icons"/>
                                <input type="text" placeholder="Nom" name="lastName" value={user.lastName} onChange={onChangeInput}/>
                            </div>
                            <div className="input-field">
                                <EmailIcon className="input-icons"/>
                                <input type="email" placeholder="Email" name="email" value={user.email} onChange={onChangeInput}/>
                            </div>
                            <div className="input-field">
                                <LockIcon className="input-icons"/>
                                <input type="password" placeholder="Mot de passe" name="password" value={user.password} onChange={onChangeInput}/>
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
        </div>
    );
};

export default Connexion 