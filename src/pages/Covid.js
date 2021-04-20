import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../config/Context/ThemeContext';

const Covid = () => {
    const {theme} = useContext(ThemeContext) 
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
            <div className="Covid">
                <p>
                    On reconnaît que le coronavirus continue d'affecter le pays de différentes manières et qu'il est possible pour les gens de recommencer à jouer au tennis à l'intérieur et à l'extérieur sous un certain nombre d'exigences différentes des gouvernements étatiques et locaux ainsi que des directives des autorités sanitaires des gouvernements locaux et étatiques. Parce que jouer au tennis ne nécessite pas de contact direct de personne à personne, les joueurs de tennis peuvent profiter des nombreux avantages physiques et mentaux que le tennis offre tout en maintenant une distance physique de six pieds. En suivant les exigences applicables dans votre région, les directives de l'établissement ainsi que les directives décrites ci-dessous, vous serez en mesure de prendre des décisions éclairées.
                </p>
                <a href="https://www.gouvernement.fr/info-coronavirus#:~:text=Si%20j'ai%20des%20sympt%C3%B4mes,de%20soins%20de%20ma%20r%C3%A9gion." target="_blank" rel="noreferrer">
                    Consulter les informations gouvernementales concernant le covid
                </a>
                <h2>Ne jouez pas si vous:</h2>
                <ul>
                    <li>Avez été en contact avec une personne atteinte du COVID-19 au cours des 14 derniers jours. </li>
                    <li>Présentez des symptômes du coronavirus. Selon le CDC, les personnes atteintes de COVID-19 ont présenté un large éventail de symptômes, allant des symptômes bénins à une maladie grave. Ces symptômes peuvent apparaître 2 à 14 jours après l'exposition au virus: fièvre, toux, essoufflement ou difficulté à respirer, frissons, tremblements répétés accompagnés de frissons, douleurs musculaires, maux de tête, maux de gorge, nouvelle perte de goût ou d'odeur.</li>
                </ul>

                <div className="consignesContainer">
                    <h2>Avant de jouer</h2>
                    <div className="consignes">
                        <div>
                            <img src='/covid/1.jpeg'/>
                            <p>Lavez-vous les mains avec du savon et de l'eau (pendant 20 secondes ou plus), ou utilisez un désinfectant pour les mains si le savon et l'eau ne sont pas facilement disponibles, avant d'aller au tribunal.</p>
                        </div>
                        <div>
                            <img src='/covid/2.jpeg'/>
                            <p>Apportez une bouteille d'eau pleine pour éviter de toucher la poignée d'un robinet ou d'une fontaine à eau.</p>
                        </div>
                        <div>
                            <img src='/covid/3.jpeg'/>
                            <p>Lorsque vous ne jouez pas activement, veuillez respecter tous les protocoles appropriés concernant les équipements de protection individuelle (EPI) et les masques faciaux.</p>
                        </div>
                        <div>
                            <img src='/covid/4.jpeg'/>
                            <p>Si vous avez besoin d'éternuer ou de tousser, faites-le dans un mouchoir ou une manche supérieure.</p>
                        </div>
                        <div>
                            <img src='/covid/5.jpeg'/>
                            <p>Évitez de toucher les portes du terrain, les clôtures, les bancs, etc., si vous le pouvez.</p>
                        </div>
                        <div>
                            <img src='/covid/6.jpeg'/>
                            <p>Arrivez le plus près possible du moment où vous avez besoin d'être là.</p>
                        </div>
                    </div>
                </div>
                <div className="consignesContainer">
                    <h2>En jouant</h2>
                    <div className="consignes">
                        <div>
                            <img src='/covid/7.jpeg'/>
                            <p>Essayez de rester à au moins six pieds des autres joueurs. N'établissez pas de contact physique avec eux (comme une poignée de main ou un high-five).</p>
                        </div>
                        <div>
                            <img src='/covid/8.jpeg'/>
                            <p>Lorsque vous jouez en double, coordonnez-vous avec votre partenaire pour maintenir une distance physique.</p>
                        </div>
                        <div>
                            <img src='/covid/9.jpeg'/>
                            <p>Bien qu'il n'y ait aucune preuve que le COVID-19 puisse être transmis en touchant des balles de tennis,  des précautions sanitaires, telles que le lavage des mains, doivent tout de même être prises.</p>
                        </div>
                        <div>
                            <img src='/covid/10.jpeg'/>
                            <p>Lavez-vous soigneusement les mains ou utilisez un désinfectant pour les mains avant, pendant et après le jeu.</p>
                        </div>
                        <div>
                            <img src='/covid/11.jpeg'/>
                            <p>N'utilisez que votre propre serviette et vos bouteilles d'eau. Évitez de partager de la nourriture et de toucher des surfaces communes telles que les portes de cour, les clôtures, les bancs, etc.</p>
                        </div>
                        <div>
                            <img src='/covid/12.jpeg'/>
                            <p>Maintenez la distance physique si vous changez les extrémités du terrain.</p>
                        </div>
                        <div>
                            <img src='/covid/13.jpeg'/>
                            <p>Utilisez des bandeaux, des chapeaux, des serviettes ou des bracelets pour éviter de vous toucher le visage pendant le jeu. Utilisez un bracelet ou une serviette pour essuyer la sueur de votre visage.</p>
                        </div>
                        <div>
                            <img src='/covid/14.jpeg'/>
                            <p>Portez un masque sur le nez et la bouche en tout temps, sauf lorsque vous êtes actif sur le court. Certaines localités exigent des masques tout en jouant à l'intérieur. Assurez-vous de suivre les directives locales.</p>
                        </div>
                    </div>
                </div>
                <div className="consignesContainer">
                    <h2>Après avoir jouer</h2>
                    <div className="consignes">
                        <div>
                            <img src='/covid/checkmark.png'/>
                            <p>Quittez le tribunal dès que raisonnablement possible.</p>
                        </div>
                        <div>
                            <img src='/covid/checkmark.png'/>
                            <p>Lavez-vous soigneusement les mains ou utilisez un désinfectant pour les mains après être sorti du terrain.</p>
                        </div>
                        <div>
                            <img src='/covid/checkmark.png'/>
                            <p>N'utilisez pas les vestiaires ou les vestiaires. Douche à la maison. </p>
                        </div>
                        <div>
                            <img src='/covid/checkmark.png'/>
                            <p>Tous les joueurs doivent quitter l'établissement immédiatement après avoir joué.</p>
                        </div>
                        <div>
                            <img src='/covid/checkmark.png'/>
                            <p>Aucune activité extrascolaire ou sociale ne doit avoir lieu. Aucune congrégation après avoir joué.</p>
                        </div>
                    </div>
                </div>
                <div className="consignesContainer">
                    <h2>Autres Informations</h2>
                    <p>
                        Le tennis, s'il est joué correctement, peut être une excellente occasion pour vous de soulager le stress, de socialiser avec les autres et de faire de l'exercice si nécessaire. Il est primordial de prendre toutes les précautions nécessaires pour assurer la sécurité de tous les participants. 

                        Parce que le tennis ne nécessite aucun contact direct de personne à personne, les joueurs peuvent profiter des nombreux avantages physiques et mentaux qu'offre le tennis tant que vous pratiquez la distance physique en gardant six pieds à l'écart des autres joueurs pour vous assurer que vous êtes dans un environnement d'exercice sûr. et suivez les autres recommandations de sécurité incluses ici.            

                        Bien qu'il n'y ait aucune preuve spécifique que les balles de tennis puissent propager le COVID-19, nous savons que la contamination par les gouttelettes respiratoires d'une personne infectée peut potentiellement survivre sur des surfaces dures jusqu'à trois jours. Si vous choisissez de jouer au tennis, assurez-vous de mettre en pratique ces conseils et recommandations de sécurité.
                    </p>
                </div>
            </div>  
        </div>
    );
};

export default Covid;