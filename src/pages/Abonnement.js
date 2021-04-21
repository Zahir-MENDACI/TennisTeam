import React, {useContext, useEffect, useState} from 'react'
import logo from '../images/lo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../config/Context/ThemeContext';
import { loadStripe } from "@stripe/stripe-js";
import { useAlert } from "react-alert";


const stripePromise = loadStripe("pk_test_51IiRkbDDFfj3QhqsP1AEp0zcFI4J7ipeTvxpsTem3yx3rcTht6ylucvMDsmjKJ6irUu7P9UO4d0EsEd0tg6prGgb00z9st0VCP");


function Abonnement() {
    const {theme} = useContext(ThemeContext) 
    const alert = useAlert();

    const abonnement1 = {title: "Abonnement Mini Junior", price: "3000"}
    const abonnement2 = {title: "Abonnement Junior", price: "6000"}
    const abonnement3 = {title: "Abonnement Etudiant", price: "8000"}
    const abonnement4 = {title: "Abonnement Senior", price: "18000"}
    const abonnement5 = {title: "Abonnement Association", price: "3000"}

    const redirect = (abonnement) =>
    {
      const auth = localStorage.getItem("Authentification");
      if (auth) {
        alert.success("Vous aller etre redirigé vers la page de payement")
        handleClick(abonnement)
      } else {
        alert.error("Veuillez d'abord vous connecter")
      }
      
    }
    
    const ProductDisplay = ({ handleClick }) => (
        <div className={theme ? "contenu light" : "contenu dark"}>
        <Navbar/>
        <div className="Abonnement">
            <div className="cardsContainer">
                <div className="card">
                    <div className="titreAbonnement">
                    </div>
                    <h3 name='title'>Abonnement Mini Junior</h3>
                    <p>personnes 10 ans et moins</p>
                    <h1>30 €</h1>
                    <button onClick={() => redirect(abonnement1)}>S'abonner</button>
                </div>
                    <div className="card">
                    <div className="titreAbonnement">
                    </div>
                    <h3>Abonnement Junior</h3>
                    <p>personnes entre 11 et 18 ans</p>
                    <h1>60 €</h1>
                    <button onClick={() => redirect(abonnement2)}>S'abonner</button>
                </div>
                <div className="card">
                    <div className="titreAbonnement">
                    </div>
                    <h3>Abonnement Etudiant</h3>
                    <p>personnes entre 19 et 24 ans</p>
                    <h1>80 €</h1>
                    <button onClick={() => redirect(abonnement3)}>S'abonner</button>
                </div>
                <div className="card">
                    <div className="titreAbonnement">
                    </div>
                    <h3>Abonnement Senior</h3>
                    <p>personnes plus de 18 ans</p>
                    <h1>180 €</h1>
                    <button onClick={() => redirect(abonnement4)}>S'abonner</button>
                </div>
                <div className="card">
                    <div className="titreAbonnement">
                    </div>
                    <h3>Abonnement Association</h3>
                    <p>membres d'une association</p>
                    <h1>30 €</h1>
                    <button onClick={() => redirect(abonnement5)}>S'abonner</button>
                </div>
            </div>
                
        </div>
        <Footer />
    </div>
      );
    
      
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  
  const requestOptions = (data) =>{
      return(
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }
      )};
  
  const handleClick = async (data) => {
      console.log(requestOptions(data))
    const stripe = await stripePromise;
    const response = await fetch("https://tennisteam-backend.herokuapp.com/api/v1/create-checkout-session", requestOptions(data));
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
    
    
    return (
         message ? (
            <Message message={message} />
          ) : (
            <ProductDisplay handleClick={handleClick} />
          )
    )
}

export default Abonnement