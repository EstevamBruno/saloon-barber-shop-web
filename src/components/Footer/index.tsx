import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  const data = new Date().getFullYear();

  return (
    <Container>
      <span>Estv dev</span>
      <span>Saloon Barber Shop - {data}</span>
    </Container>
  );
}

export default Footer;
