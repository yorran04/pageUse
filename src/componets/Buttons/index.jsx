import React from 'react';

import { ButtonContainer } from './styles';

export function Buttons({title, colori="primary", onClick }) {
  return (
    <ButtonContainer colori={colori} onClick={onClick} >
        {title}

    </ButtonContainer>
  );
}