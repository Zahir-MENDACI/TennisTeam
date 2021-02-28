import React from 'react'
import logo from '../lo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Abonnement() {
    return (
            <>
                <Navbar/>
                <div class="Abonnement">
                    <img src={logo} className="imgAb"/>
                    <div class="btnn">
                        <button>COURS DE TENNIS POUR JEUNES</button>
                        <button>ECOLE DE TENNIS DES JEUNES</button>
                        <button>COURS PRIVES POUR JEUNES</button>
                        <button>COURS DE TENNIS POUR ADULTES</button>
                    </div>
                        
                </div>
                <Footer />
            </>
    )
}

export default Abonnement