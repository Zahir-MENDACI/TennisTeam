import React from 'react'

function Footer() {
    return (
        <footer class="footer text-white bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="footer-widget">
                            <h3>Contact</h3>
                            <div class="footer-widget-content">
                                <a href="mailto:support@example.com" class="contact-link red"> support@Tclub.com </a>
                                <div class="contact-link">(+33)1 22 33 44 55</div>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook text-white"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter text-white"></i></a></li>
                                        <li><a href="#"><i class="fa fa-youtube text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="footer-widget">
                            <h3>Heures d'ouverture</h3>
                            <div class="footer-widget-content">
                                <div class="open-time ">
                                    <ul class="opening-time">
                                        <li><span><i class="fa fa-times"></i></span><p class="clock-time"><strong>Lundi :</strong> Fermé</p>
                                        </li>
                                        <li><span><i class="fa fa-check"></i></span><p><strong>Mar-Jeu :</strong> 08:00 – 17:00</p></li>
                                        <li><span><i class="fa fa-check"></i></span><p><strong>Ven-Dim :</strong> 07:00 – 18:00</p></li>
                                        <li><span><i class="fa fa-check"></i></span><p><strong>Vacances :</strong> 08:00 – 12:00</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="footer-widget">
                            <h3>Derniers évènements</h3>
                            <div class="footer-widget-content">
                                <div class="images-gellary">
                                    <ul>
                                        <li class="mt-2"><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 01" /></a></li>
                                        <li class="mt-2"><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 02" /></a></li>
                                        <li class="mt-2"><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 03" /></a></li>
                                        <li class="mt-2"><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 04" /></a></li>
                                        <li class="mt-2"><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 05" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    )
}

export default Footer
