import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

function Footer() {

    const contactTemplate = 
    {
        nom: '',
        prenom:'', 
        email: '',
        message: ''
    }

    const [contact, setContact] = useState(contactTemplate)


    console.log(contact.nom)
    
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setContact({...contact, [name]:value})
    }

    init("user_jIe3wORMz41ToPMW7u3Zy");


    const envoi = (e) =>
    {
        e.preventDefault();
        if( (contact.nom || contact.prenom || contact.email || contact.message) == '')
        {
            alert('Veuillez remplir tous les champs')
        }
        else
        {
            
        }
    }


    return (
        <div class="footer">
            {/* <div class="container">
                <div class="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
                </div>
            </div> */}

                <div class="info">
                    <h5> Adresse: </h5>
                    12 Rue Anatole France, 92000 Nanterre
                    <h5> Telephone: </h5>
                    0123456789
                    <h5> Email: </h5>
                    tennis.team.ynov@gmail.com
                </div>
                <div onSubmit={envoi} class="form">
                    <h2>Contact</h2>
                    <input type="text" placeholder="Nom" name="nom" value={contact.nom} onChange={onChangeInput}></input>
                    <input type="text" placeholder="Prenom" name="prenom" value={contact.prenom} onChange={onChangeInput}></input>
                    <input type="email" placeholder="Email" name="email" value={contact.email} onChange={onChangeInput}></input>
                    <textarea type="text" placeholder="Message" name="message" value={contact.message} onChange={onChangeInput}></textarea>
                    <button type="submit">Envoyer</button>
                </div>
        </div>
    )
}

export default Footer;
