import styled from 'styled-components';

export const Btg = styled.body`

background-color:#fcac03;
width: 100%;
height: auto;
`

export const Container = styled.main`

    width: 100%;
    max-width: 90%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    
    
    @media (max-width: 600px){
        flex-direction: column-reverse;
        gap: 2rem;
        
    }

`

export const Title = styled.h1`
   
    font-family: sans-serif;
    font-size: 34px;
    font-weight: 700;
    color: yellow;
    text-shadow: 2px 2px 2px black;

`

export const Texto = styled.p`

    font-family: "Poppins", sans-serif ;
    font-size: 18px;
    color: #FFF;
    text-shadow: 2px 2px 2px black;
    margin-bottom: 1rem;
`

export const Image = styled.img`

    width: 100%;
    height: 100%;
    border-radius: 10px;
    
    

    
    @media (max-width: 700px){
        width: 90%;
        
    }

    

`
