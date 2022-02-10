import styled from "styled-components";
import {backgroundColorInitialPage} from "../../constants/colors";
import logo from "../../assets/logo-future-eats-white.png"
import { keyframes } from "styled-components";
export {logo}

export const Container = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${backgroundColorInitialPage};    
    `

// Keyframes de pulse
const rotate = keyframes`
    from {
    transform: scale(1.5);
    }

    to {
    transform: scale(4);
    }
`;

export const PulseButton = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-size: 32%;
    background-repeat:no-repeat;
    display: inline-block;    
    animation: ${rotate} 3s linear; // colocar  linear infinite se quiser o pulse
    width: 60%;
    height: 30%;
`;