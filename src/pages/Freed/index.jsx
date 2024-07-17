import React from 'react';

import {Header} from '../../componets/Header/index'
import {Card} from '../../componets/Card'
import { Container} from './styles';

import logo from '../../img/logo.jpg'

export function Freed({percentual, nome}) {
  return (
    <>
    <Header></Header>
    <Container>
        <div style={{flex:2}}>

        </div>
        <div style={{flex:1}}>
           <Card nome={'Top 5'} percentual={50}/>
           <Card btgMusic={logo} percentual={35}/>
           <Card btgMusic={logo} percentual={80}/>
           <Card btgMusic={logo} percentual={35}/>
           <Card btgMusic={logo} percentual={95}/>
        </div>
    </Container>
    </>
  );
}