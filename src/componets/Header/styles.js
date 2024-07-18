import styled from 'styled-components';


export const Container = styled.div`
    
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;


`
export const Wrapper = styled.div`
    background: #FFF;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 2px gray;
   
`

export const MenuInput = styled.input`
    background: #eee;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;

`


export const MenuRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

` 
export const MenuImg = styled.img`
    width: 15%;
    height: 90%;
    opacity: 90%;

` 

export const UserPicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;

`