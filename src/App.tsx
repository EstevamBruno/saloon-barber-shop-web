import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global/globalStyles';
import Routes from './routes';
import NavbarApp from './components/NavbarApp';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavbarApp />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
