import React from 'react'

function Info() {
    return (
        <div className="container my-5 text-justify border border-danger rounded">
            <h1 className="mb-3 text-center">DÉCONFINEMENT 4  - CE QUI CHANGE LE 17 JANVIER 2021</h1> 
            <p>
                À partir du samedi 17 janvier 2021, et pour une période de 2 semaines au moins, <span className="text-warning">la pratique du tennis n'est possible que sur les terrains extérieurs</span>, y compris pour l'école de tennis et les entraînements "jeunes".
            </p>
            <p>            
                La pratique loisirs (adultes et jeunes) est toujours possible, uniquement sur les terrains extérieurs.
            </p>
            <p className="text-danger">
                Fermeture des installation = 17h30 (couvre-feu à 18h).
            </p>
            <p>
                Nous vous tiendrons informés de toute évolution de ces dispositions et comptons sur votre compréhension.
            </p>
        </div>
    )
}

export default Info
