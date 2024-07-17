import styled from 'styled-components';

export const Btg = styled.body`

background-color:#fcac03;

`

export const Container = styled.main`

    width: 100%;
    height: 100vh;
    max-width: 90%;
    margin: 0 auto;

    padding-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 600px){
        margin: 0 auto;
        margin-top: 3rem;
        flex-direction: column;        
    }
    
    `

export const Title = styled.h2`
   font-family: sans-serif;
    font-size: 34px;
    font-weight: 700;
    color: yellow;
    text-shadow: 2px 2px 2px black;
    margin-bottom: 0.5rem;
`

export const TextP = styled.p`
    font-family: sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    margin-bottom: 0.5rem;
`


export const TextInput = styled.input`
    background: #eee;
    margin: 0.2rem 0;
    padding: 0.5rem;
    border: 0;
    width: 70%;
    color: black;
    border-radius: 10px;

`
export const Image = styled.img`

    width: 100%;
    height: 100%;
    border-radius: 10px;
    
    

    
    @media (max-width: 700px){
        width: 90%;
        
    }

    

`