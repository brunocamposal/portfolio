import { createGlobalStyle } from 'styled-components';

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
        color: black;
    }
    :root{
        --primary: #8D70FB;
        --primary-dark: #0c0a26;
    }
`;
