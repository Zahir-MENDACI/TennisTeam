import React from 'react'
import logo from '../images/lo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Abonnement() {
    return (
            <>
                <Navbar/>
                <div class="Abonnement">
                    {/* <img src={logo} className="imgAb"/> */}
                    <div class="cardsContainer">
                        {/* <button>COURS DE TENNIS POUR JEUNES</button>
                        <button>ECOLE DE TENNIS DES JEUNES</button>
                        <button>COURS PRIVES POUR JEUNES</button>
                        <button>COURS DE TENNIS POUR ADULTES</button> */}
                        <div className="card">
                            <div className="titreAbonnement">
                            </div>
                            <h3>Mini Junior</h3>
                            <p>personnes 10 ans et moins</p>
                            <h1>30 €</h1>
                            <button>S'abonner</button>
                        </div>
                            <div className="card">
                            <div className="titreAbonnement">
                            </div>
                            <h3>Junior</h3>
                            <p>personnes entre 11 et 18 ans</p>
                            <h1>60 €</h1>
                            <button>S'abonner</button>
                        </div>
                        <div className="card">
                            <div className="titreAbonnement">
                            </div>
                            <h3>Etudiant</h3>
                            <p>personnes entre 19 et 24 ans</p>
                            <h1>80 €</h1>
                            <button>S'abonner</button>
                        </div>
                        <div className="card">
                            <div className="titreAbonnement">
                            </div>
                            <h3> Senior</h3>
                            <p>personnes plus de 18 ans</p>
                            <h1>180 €</h1>
                            <button>S'abonner</button>
                        </div>
                        <div className="card">
                            <div className="titreAbonnement">
                            </div>
                            <h3>Association</h3>
                            <p>membres d'une association</p>
                            <h1>30 €</h1>
                            <button>S'abonner</button>
                        </div>
                    </div>
                        
                </div>
                <Footer />
            </>
    )
}

export default Abonnement