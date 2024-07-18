import React from "react";

import { useNavigate } from 'react-router-dom';

import {Header} from '../../componets/Header/index'
import { Container , Texto, Title, Image, Btg} from './Styles';
import logo from '../../img/logo.jpg'
import { Buttons } from "../../componets/Buttons";

export function Home (){

    const navegate = useNavigate();

   
    const handleClick = () => {
        navegate('/login');
      };
      
    return(
        <Btg>
        <Header/>
        <Container>
            <div >
                <Image src={logo} className="foto"/>
            </div>
            <div>
                <Title>Build your PlayList</Title>
                <Texto>This is your life</Texto>
                <Buttons title={'Entrar'} onClick={handleClick}></Buttons>
            </div>
           
        </Container>
        </Btg>
    )
}