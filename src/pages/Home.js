import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import Footer from '../Acceuil/Footer';
import Banner from '../Acceuil/Banner';
import Info from '../Acceuil/Info';
import Coach from './Coach';
import photo1 from '..//images/image (3).jfif';
import { NavLink, useHistory } from 'react-router-dom';
import { ThemeContext } from '../config/Context/ThemeContext';



const Home = () => {
    const d = new Date()
    const history = useHistory()
    const {theme} = useContext(ThemeContext) 
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
                <div className="Home">
                    <div className="homeContent">
                        <div class="btndiv">
                            <button class="button" onClick={() => history.push('/planning')}>Consulter planning</button>
                            <button class="button" onClick={() => history.push('/abonnement')}>Prendre un abonnement</button>
                        </div>
                    </div>
                

                <div className="CoachHome">
                    <h1>Tennis Team</h1>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error veniam porro sint, cupiditate dolore odio. Cumque expedita perferendis ea. Quam molestiae atque deleniti neque incidunt eaque laborum est vero!
                    </div>
                    <div className="coachs">
                        <div className="div">
                            <img src={photo1}/>
                            <h2>NOM Prenom</h2>
                        </div> 
                        <div className="div">
                            <img src={photo1}/>
                            <h2>NOM Prenom</h2>
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
                    <NavLink exact to = "/coach">Plus de details</NavLink>
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