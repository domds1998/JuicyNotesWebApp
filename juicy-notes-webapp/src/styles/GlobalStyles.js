import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 1.1vw;
    background-color: #fffcd5;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
`;

export const Main = styled.div`
    min-height: calc(100vh - 190px);
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
`;