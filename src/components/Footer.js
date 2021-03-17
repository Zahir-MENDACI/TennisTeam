import React from 'react'

function Footer() {
    return (
        <div class="footer">
            {/* <div class="container">
                <div class="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
                </div>
            </div> */}

                <div class="info">
                    <h5> Adresse: </h5>
                    rue ksdjksdkjsdsdklsdlmlsdml
                    <h5> Telephone: </h5>
                    0123456789
                    <h5> Email: </h5>
                    azert@azer.fr
                </div>
                <div class="form">
                    <h2>Contact</h2>
                    <input type="text" placeholder="Nom"></input>
                    <input type="text" placeholder="Prenom"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea type="text" placeholder="Message"></textarea>
                    <button>Envoyer</button>
                </div>
        </div>
    )
}

export default Footer;
