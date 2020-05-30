import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global/globalStyles';
import Routes from './routes';
import NavbarApp from './components/NavbarApp';
import Footer from './components/Footer';
import { AppContainer, AppContent } from './styles/AppContainer/styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <NavbarApp />
        <AppContent>
          <Routes />
        </AppContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
