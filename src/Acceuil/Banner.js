import React from 'react'
import '../App.css'

function Banner() {
    return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/banner1.jpg" class="d-block w-100 fill" alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <a href="#" class="btn btn-dark carousel-button">S'inscrire au cours</a>
                        <a href="#" class="btn btn-dark carousel-button">Prendre un abonnement</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/banner4.jpg" class="d-block w-100 fill" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <a href="#" class="btn btn-dark carousel-button">Réserver votre terrain de tennis maintenant</a>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden d-none">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden d-none">Next</span>
            </a>
        </div>
    )
}

export default Banner
