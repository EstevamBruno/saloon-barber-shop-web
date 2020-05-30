import React, { useState, useEffect } from 'react';
import { productsData } from '../../services/api';
import { ProductCard, ProductInformations, MainContainer } from './styles';
import Product from '../../domains/product.interface';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <MainContainer className="container-fluid">
      <div className="row">
        <div className="col">
          <Banner />
        </div>
      </div>
      <div className="row">
        {products.map(product => (
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            key={product.id}
          >
            <ProductCard>
              <img src={product.photo} alt={product.name}/>
              <ProductInformations>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.description}</span>
                </div>
                <div>
                  <span>R${product.price}</span>
                  <Link to="#">Detalhes</Link>
                </div>
              </ProductInformations>
            </ProductCard>
          </div>
        ))}
       </div>
    </MainContainer>
  );
}

export default Main;
