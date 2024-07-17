import React from 'react';

import {Header} from '../../componets/Header/index'
import {Card} from '../../componets/Card'
import { CardInfo } from '../../componets/CardInfo';
import { Container, Btg, Title} from './styles';

import logo from '../../img/logo.jpg'

export function Freed({percentual, nome}) {
  return (
    <Btg>
    <Header></Header>
    <Container>
        <div style={{flex:2, display:'flex', flexDirection:'column', gap: 5}}>
          <Title>Artistas</Title>
          <CardInfo num={1} cantor={'Ferrugem'} musica={'Interesante'}></CardInfo>
          <CardInfo num={2} cantor={'Kamisa 10'} musica={'Sentada Malvada'}></CardInfo>
          <CardInfo num={3} cantor={'Pabllo Vittar'} musica={'Bandidona'}></CardInfo>
          <CardInfo num={4} cantor={'Pedro Sampaio'} musica={'Nem Aí'}></CardInfo>
          <CardInfo num={5} cantor={'Mc Ryan'} musica={'Namora Aí'}></CardInfo>
        </div>
        <div style={{flex:1}}>
           <Card nome={'Top 5 Brasil'} num={1} percentual={70}/>
           <Card num={2} percentual={65}/>
           <Card num={3} percentual={50}/>
           <Card num={4} percentual={35}/>
           <Card num={5} percentual={20}/>
        </div>
    </Container>
    </Btg>
  );
}