import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../Logo.png'
import photo1 from '../images/Nadal.jpg';
import photo2 from '../images/Williams.jpg';
import { NavLink, useHistory } from 'react-router-dom';
import { ThemeContext } from '../config/Context/ThemeContext';
import { useAlert } from "react-alert";



const Home = (props) => {
    const d = new Date()
    const history = useHistory()
    const {theme} = useContext(ThemeContext) 
    console.log(props.match.params.params)
    const alert = useAlert();

    if (props.match.params.params === "succeed")
    {
        alert.success("Payement réussi!")
    }
    if (props.match.params.params === "canceled")
    {
        alert.error("Payement annulé!");
    }
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
                <div className="Home">
                    <div className="homeContent">
                        <img src={Logo}/>
                        <div class="btndiv">
                            <button class="button" onClick={() => history.push('/planning')}>Consulter planning</button>
                            <button class="button" onClick={() => history.push('/abonnement')}>Prendre un abonnement</button>
                        </div>
                    </div>
                

                <div className="CoachHome">
                    <h1>Tennis Team</h1>
                    <div>
                        <p>
                            Tennis Team est doté de 8 terrains en surface rapide dont 6 extérieurs et 2 intérieurs . C’est aussi un club house, ouvert à tous les adhérents 5 jours sur 7, pour se détendre entre 2 matchs, partager un repas entre joueurs, ou boire un café.
                        </p>
                        <p>
                            Venez vous entraîner dans un cadre où vous trouverez toutes les structures sportives, dont vous avez besoin.
                            Le Tennis Club de Cugnaux propose une école de tennis qui regroupe près de 250 enfants, un centre d’entraînement et un centre de compétition qui forment  plus d’une quarantaine de jeunes compétiteurs.
                        </p>
                        <p>
                            Autour de ces entraineurs qualifiés, une équipe d’initiateurs diplômés les assistent chaque semaine. Ils livrent leurs précieux conseils pas seulement aux enfants mais également à l’école de tennis adultes et enfin lors des nombreux cours collectifs et stages proposés chaque année.
                        </p>
                    </div>
                    <div className="coachs">
                        <div className="div">
                            <img src={photo1}/>
                            <h2>Novak Djokovic</h2>
                        </div> 
                        <div className="div">
                            <img src={photo2}/>
                            <h2>Serena Williams</h2>
                        </div> 
                    </div>
                    <NavLink exact to = "/coach">Plus de details</NavLink> 
                </div>
                
                <div className="planningHome">
                    <h1>Evenements</h1>
                    <div className="content">
                        <div className="today">
                            <h3>Aujourd'hui le {`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}:`}</h3>
                            <p>--Evenement d'aujourd'hui--</p>
                        </div>
                        <div className="later">
                            <h3>Prochain evenement le {`${d.getDate()+2}/${d.getMonth()}/${d.getFullYear()}:`}</h3>
                            <p>--Le prochain evenement--</p>
                        </div>
                    </div>
                    <NavLink exact to = "/planning">Plus de details</NavLink>
                </div>
                </div>
            <Footer />
                {/* <Banner />
                <Info />
                <Coach /> */}
        </div>
    );
};

export default Home;