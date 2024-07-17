import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

   margin-top: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 600px){
        flex-direction: column-reverse;
        gap: 2rem;
        
    }

`;

