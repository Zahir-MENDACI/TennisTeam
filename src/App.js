import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Abonnement from './pages/Abonnement.js';
import Coach from './pages/Coach.js';
import Connexion from './pages/Connexion';
import Planning from './pages/Planning';
import photo from './photo.jpg';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Intro from './pages/Intro';
import Covid from './pages/Covid';
import ThemeContextProvider from './config/Context/ThemeContext';
import { useState } from 'react';
import PrivateRoute from './config/router/privateRoute';
import Checkout from './pages/Checkout';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App = () => {

  const [theme, setTheme] = useState("light")
  const options = {
    offset: '100px',
    timeout: 5000,
    position: positions.TOP_RIGHT
  };
  return (
<Provider template={AlertTemplate} {...options}>
    <ThemeContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/accueil" exact component={Home} />
          <Route path="/accueil/:params" exact component={Home} />
          <Route path="/abonnement" exact component={Abonnement} />
          <Route path="/coach" exact component={Coach} />
          <PrivateRoute path="/connexion" exact component={Connexion} />
          <Route path="/planning" exact component={Planning} />
          <Route path="/covid" exact component={Covid} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
    </Provider>
    // <div className="App">
      
    //   <Navbar />
    //   {/* page d'abonnement */}
    //   {/* <Abonnement /> */}

      // {/* page D'acceuil */}
      // {/* <div class="btndiv">
      //   <button class="button">S'inscrire à un cours</button>
      //   <button class="button">Prendre un abonnement</button>
      // </div> */}

    //   {/* page des Coach */}
    //    <Coach />
    //   <Footer />
    // </div>
  );
}

export default App;
