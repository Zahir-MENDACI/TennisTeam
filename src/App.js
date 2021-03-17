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

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/abonnement" exact component={Abonnement} />
        <Route path="/coach" exact component={Coach} />
        <Route path="/connexion" exact component={Connexion} />
        <Route path="/planning" exact component={Planning} />
      </Switch>
    </BrowserRouter>
    

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
