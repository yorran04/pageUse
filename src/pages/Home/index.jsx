import React from "react";

import {Header} from '../../componets/Header/index'
import { Container , Texto, Title, Image, Btg} from './Styles';
import logo from '../../img/logo.jpg'
import { Buttons } from "../../componets/Buttons";

export function Home (){
    return(
        <Btg>
        <Header/>
        <Container>
            <div >
                <Image src={logo} className="foto"/>
            </div>
            <div>
                <Title>Build your Dream</Title>
                <Texto>This is your life</Texto>
                <Buttons title={'Click'} ></Buttons>
            </div>
           
        </Container>
        </Btg>
    )
}