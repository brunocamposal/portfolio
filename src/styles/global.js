import { createGlobalStyle } from 'styled-components';
import "../assets/fonts/fonts.css"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html, body{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
    }
    body {
        background-color: #FFFFFF;
        color: var(--primary);
        font-family: 'Josefin Sans', cursive;
    }
    :root{
        --primary: #3B3838;
    }
`;
