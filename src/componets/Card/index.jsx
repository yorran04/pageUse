import React from 'react';

import {Title, ColumnContent, RowContent, Line, BoxImg} from './styles'

export function Card({nome, percentual, btgMusic}) {
  return (
   <>
   <Title>{nome}</Title>
   <ColumnContent>
   <RowContent>
    <BoxImg src={btgMusic}></BoxImg>
    <Line percentual={percentual}></Line>
   </RowContent>
   </ColumnContent> 
   </>
  );
}