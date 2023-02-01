import styled, {createGlobalStyle} from "styled-components";

import BGImage from './images/background1.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

`
export const Wrapper = styled.div`
    .btn-warning{
        cursor: pointer;
        width: 10%;
        border-radius: 35px;
        border: 2px solid #d38558; 
    }
    .score {
        color : white;
        font-size: 1.3rem;
    }
    h1{
        color: yellow;
        font-family: fascinate Inline;
        letter-spacing: 0.5rem;
    }
`