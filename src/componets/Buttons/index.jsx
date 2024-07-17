import React from 'react';

import { ButtonContainer } from './styles';

export function Buttons({title, colori="primary", onClink }) {
  return (
    <ButtonContainer colori={colori} onClinck={onClink} >
        {title}

    </ButtonContainer>
  );
}