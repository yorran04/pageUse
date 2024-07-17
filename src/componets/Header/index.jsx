import React from 'react';

import { Container, Wrapper, MenuInput, MenuRight } from './styles';
import { Buttons } from '../Buttons/index';


export function Header({autenticado}) {
  return (
   
    <Wrapper>
    <Container>
        <MenuInput placeholder='Buscar...'/>
        <MenuRight>
            <Buttons title={'Entrar'} colori='secundary'/>
            <Buttons title={'Cadastrar'} colori='secundary'/>
        </MenuRight>
    </Container>
   </Wrapper>
  
  );
}