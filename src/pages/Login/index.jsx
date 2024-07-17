import React from "react";

import  login  from '../../img/login.jpg'
import { Header } from "../../componets/Header";
import { Container, Title, TextInput, TextP, Image, Btg } from './styles';
import { Buttons } from "../../componets/Buttons";

export function Login (){
    return(
        <Btg>
        <Header/>
        <Container>
         <div style={{flex:1}}>
         <Title>Faça seu cadastro</Title>
         <TextP>Lorem ipsum dolor, sit amet consectetur</TextP>
         <TextInput placeholder="E-mail" type="E-mail"/>
         <TextInput placeholder="Senha" type="password"/>
         <Buttons title={'Entrar'} />
         </div>
         <div style={{flex:1}}>
            <Image src={login} alt="img-login"></Image>
         </div>

        </Container>
        </Btg>
    )
}