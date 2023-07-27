import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps{

}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        border: none;
        
        
    }


    body , input, textarea, button{
        font-family: Roboto, sans-serif;
        border: none;
        
    }
    

`;
