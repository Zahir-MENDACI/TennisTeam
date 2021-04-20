import React, { useContext } from 'react'
//import photo from '../components/coach.png';
import photo1 from '../images/Djokovic.jpg';
import photo2 from '../images/Nadal.jpg';
import photo3 from '../images/Federer.jpg';
import photo4 from '..//images/Williams.jpg';
import photo5 from '../images/Sharapova.jpg';
import photo6 from '../images/Halep.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../config/Context/ThemeContext';


const Coach = () => {
    var tab = [];
    var photo = [photo1, photo2, photo3, photo4, photo5, photo6]
    var nom = ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Serena Williams", "Maria Sharapova", "Simona Halep"]
    const desc = [
        "Novak Djokovic ou Novak Đoković, né le 22 mai 1987 à Belgrade, est un joueur de tennis serbe, professionnel depuis 2003.",
        "Rafael Nadal Parera est un joueur de tennis espagnol, professionnel depuis 2001, né le 3 juin 1986 à Manacor, sur l'île de Majorque, dans l'archipel des Baléares.",
        "Roger Federer, né le 8 août 1981 à Bâle, est un joueur de tennis suisse. Joueur professionnel depuis 1998, il a occupé durant 310 semaines la première place du classement mondial de tennis ATP World",
        "Serena Jameka Williams est une joueuse de tennis américaine née le 26 septembre 1981 à Saginaw. Considérée comme l'une des plus grandes joueuses de tous les temps, elle a, à ce jour, remporté 39 titres du Grand Chelem en simple et en double, soit 7 Open d'Australie, 3 Roland-Garros, 7 Wimbledon et 6 US Open en simple ; 4 Open d'Australie, 2 Roland-Garros, 6 Wimbledon et 2 US Open en double dames avec sa sœur Venus Williams et 1 Wimbledon et 1 US Open en double mixte.",
        "Maria Yourievna Sharapova, née le 19 avril 1987 à Niagan en Sibérie, est une ancienne joueuse professionnelle de tennis russe. Elle est la première Russe à réussir plusieurs performances majeures sur le circuit féminin. Tout d'abord, elle est la première Russe à remporter Wimbledon lors de l'édition 2004.",
        "Simona Halep, née le 27 septembre 1991 à Constanța, est une joueuse de tennis roumaine. Professionnelle depuis 2008, elle a remporté vingt et un tournois en simple sur le circuit WTA."
    ]
    for (let i = 0; i < photo.length; i++) {
        tab.push(
            <div className="card">
                <img src={photo[i]}/>
                <h4>{nom[i]}</h4>
                <p>{desc[i]}</p>
            </div>                        
        )
        }

        const {theme} = useContext(ThemeContext) 
    return (
            <div className={theme ? "contenu light" : "contenu dark"}>
                <Navbar />
                <div class="Coach">
                    <div className="cardsContainer">
                        {tab}            
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Coach
