import React from 'react';

import { Title, Container, Content, ContentLeft, ContentRigth, Texto, Music } from './styles';

export function CardInfo({num, cantor, musica}) {
  return (
    <>
    <Container>
    <Content>

       <ContentLeft>
        <Title>{num}</Title>
       </ContentLeft>

       <ContentRigth>
        <Texto>{cantor}</Texto>
        <Music>{musica}</Music>
       </ContentRigth>

    </Content>

    </Container>
    </>
  );
}