import styled from "styled-components";


export const Title = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    color: yellow;
    text-shadow: 2px 2px 2px black;
    margin-bottom: 1rem;
    text-align: center;
`

export const ColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

`

export const RowContent = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

`

export const Line = styled.div`

    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: white;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 8px;
        border-radius: 10px;
        background-color: powderblue;


    }

`

export const BoxImg = styled.img`

    width: 4rem;
    height: 4rem;
    border-radius: 10%;
    border: 1px solid black;
    object-fit: contain;

`