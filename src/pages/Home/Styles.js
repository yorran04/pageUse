import styled from 'styled-components';

export const Btg = styled.body`

background-color:#fcac03;

`

export const Container = styled.main`

    width: 100%;
    max-width: 90%; 
    height:100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    
    
    @media (max-width: 600px){
        height: auto;
        flex-direction: column-reverse;
        justify-content: start;
        margin-top: 5rem;
        
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

    width: 70%;
    height: 70%;
    border-radius: 10px;
    
    

    
    @media (max-width: 600px){
        width: 60%;
        
    }

    

`
