import React from 'react';

import {Title, ColumnContent, RowContent, Line, Box} from './styles'

export function Card({nome, percentual, num}) {
  return (
   <>
   <Title>{nome}</Title>
   <ColumnContent>
   <RowContent>
    <Box>{num}</Box>
    <Line percentual={percentual}></Line>
   </RowContent>
   </ColumnContent> 
   </>
  );
}