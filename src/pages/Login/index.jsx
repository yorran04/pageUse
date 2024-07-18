import React from "react";

import { useNavigate } from 'react-router-dom';

import  login  from '../../img/login.jpg'
import { Header } from "../../componets/Header";
import { Container, Title, TextInput, TextP, Image, Btg } from './styles';
import { Buttons } from "../../componets/Buttons";

export function Login (){

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/freed');
    };
    

    return(
        <Btg>
        <Header/>
        <Container>
         <div>
         <Title>Faça seu cadastro</Title>
         <TextP>Lorem ipsum dolor, sit amet consectetur</TextP>
         <TextInput placeholder="E-mail" type="E-mail"/>
         <TextInput placeholder="Senha" type="password"/>
         <Buttons title={'Entrar'} onClick={handleClick}/>
         </div>
         <div>
            <Image src={login} alt="img-login"></Image>
         </div>

        </Container>
        </Btg>
    )
}