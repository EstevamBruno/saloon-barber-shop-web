import React from 'react';
import {Link} from 'react-router-dom';

import { FiScissors } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';

const NavbarApp: React.FC = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-light" style={{boxShadow: '0 0 10px #ccc'}}>
      <Link className="navbar-brand" to="#" style={{textAlign: 'center'}}>
        <h5>Saloon Barber Shop</h5>
        <FiScissors style={{marginLeft: '5px'}} />
        <FiShoppingCart style={{marginLeft: '5px'}} />
      </Link>
      <button className="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Promoções
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Entrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarApp;
