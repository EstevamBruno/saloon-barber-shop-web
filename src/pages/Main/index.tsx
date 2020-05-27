import React, { useState, useEffect } from 'react';
import { productsData } from '../../services/api';
import { ProductCard } from './styles';
import Product from '../../domains/product.interface';

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map(product => (
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            key={product.id}
          >
          <ProductCard>
            <img src={product.photo} alt={product.name}/>
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <div>
                <span>R${product.price}</span>
                <p>Detalhes</p>
                {/* <FiShoppingCart size={24} color='gold'/> */}
              </div>
            </div>
          </ProductCard>
        </div>
        ))}
       </div>
    </div>
  );
}

export default Main;
