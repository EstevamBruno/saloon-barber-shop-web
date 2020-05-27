import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global/globalStyles';
import Routes from './routes';
import NavbarApp from './components/NavbarApp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavbarApp />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
