import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;
    height: 150px;
    border: 1px solid white;
    border-radius: 5px;

`

export const Content = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

`
export const ContentLeft = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100%;
    background: #fff;

    
`
export const ContentRigth = styled.div`
     flex: 3;
     display: flex;
     align-items: start;
     justify-content: center;
     flex-direction: column;
     margin-left: 1rem;
     width: 100%;
     height: 100%;

`


export const Title = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    color: yellow;
    text-shadow: 2px 2px 2px black;
    margin-bottom: 1rem;
    text-align: center;`

export const Texto = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: #fff;
    `

export const Music = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    color: #fff;
    `

