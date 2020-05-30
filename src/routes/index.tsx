import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import ProductDetails from '../pages/ProductDetails';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/details' component={ProductDetails} />
    </Switch>
  );
}

export default Routes;
