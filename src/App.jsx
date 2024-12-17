import './App.css'
import PaginaInicial from "./assets/components/PaginaInicial.jsx";
import styled from 'styled-components';
import { useEffect } from 'react';

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.background}');
  background-size: cover;
  background-position: center;
  z-index: -2;
  image-rendering: pixelated;
  filter: blur(5px);
  opacity: 0.5;
`;

const BackgroundGrain = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed !important;
    z-index: -1;
    left: 0;
    top: 0;
`;

function App() {

  useEffect(() => {
    const options = {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.07,
        grainDensity: 0.8,
        grainWidth: 1,
        grainHeight: 1,
        grainChaos: 0.5,
        grainSpeed: 2
    };

    // eslint-disable-next-line no-undef
    grained('#grain-background', options);
}, []);

  return (
    <>
        <BackgroundGrain id={"grain-background"} />
        <Background background="images/background.jpg"/>
        <PaginaInicial/>
    </>
  )
}

export default App
