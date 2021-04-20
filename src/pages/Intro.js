import React from 'react';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie-player'
import lottieJson from '../Intro.json';

const Intro = () => {

  const history = useHistory()

  const redirect = () =>
  {
    history.push('/accueil') 
  }
  
  return (
    <div>
      <Lottie
        className="a"
        loop={false}
        play={true}
        animationData={lottieJson}
        onComplete={redirect}
      />
    </div>
  );
};

export default Intro;