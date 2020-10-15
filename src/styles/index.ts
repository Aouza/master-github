import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        font-family: 'Montserrat', sans-serif;


    }

    html, body{
        height: 100%;
        background-color: var(--color-main-black);
        color: var(--color-main-white);
        font-family: "Montsserat";
    }

    a{
        text-decoration: none;

    }

    button, input{
        display: block;
        border: 0;
        background: none;
        outline: none;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    #root{
        display: grid;
        grid-template-columns: 150px 1fr;

        @media (max-width: 36rem) {
            display: flex;
            flex-direction: column;
    }

    }

    :root{

    --color-main-black: #000000;
    --color-main-green: #21ffb5;
    --color-main-purple: #a700ff;
    --color-main-pink: #ff02b590;
    --color-main-white: #ffffff;
    --color-dark-gray: rgba(14,14,14,.9);
    }


`;
