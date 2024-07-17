import styled from 'styled-components';

export const Btg = styled.body`

background-color:#0f2138;
width: 100%;


`
export const Container = styled.div`
    
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

   margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;

    
    
    @media (max-width: 600px){
        flex-direction: column-reverse;
        gap: 2rem;
        
    }

`;

export const Title = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    color: yellow;
    text-shadow: 2px 2px 2px black;
    margin-bottom: 1rem;
    text-align: center;
`
