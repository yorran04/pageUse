import React from 'react';

import { Container, Wrapper, MenuInput, MenuRight, MenuImg, UserPicture } from './styles';
import { Buttons } from '../Buttons/index';

import logo from '../../img/spotify.jpg'
import photo from '../../img/user.jpg'

export function Header({autenticado}) {
  return (
   
    <Wrapper>
    <Container>
        <MenuImg src={logo} alt='logo spotify'></MenuImg>
        {autenticado ? (
          <>
             <MenuInput placeholder='Buscar...'/>
             </>
        ) : null}
        {autenticado ? (
          <UserPicture src={photo}></UserPicture>
        )        
        : (
          <>
              <MenuRight>
            <Buttons title={'Entrar'} colori='secundary'/>
            <Buttons title={'Cadastrar'} colori='secundary'/>
           </MenuRight>
          </>
        )}

    </Container>
   </Wrapper>
  
  );
}