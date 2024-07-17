import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`

    background: #eee;
    color: black;
    font-family: "Poppins", sans-serif ;
    font-weight:700;
    position: relative;
    border-radius: 10px;
    font-size: 14px;

    padding: 8px 12px;
    min-width: 120px;
    width: 50%;
    background: #FFF;
    border: none;

    margin-top: 0.2rem;
    
   

    ${({colori}) => colori !== "primary" && css`
    
        background: #fcac03;
        color: #FFF;
        font-weight: 600;
    
    `}



`