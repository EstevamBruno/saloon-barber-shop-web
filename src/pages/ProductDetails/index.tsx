import React, { useState, useEffect } from 'react';
import { Container, Infos, Galery } from './styles';
import Product from '../../domains/product.interface';

const products: Product[] = [
  {
    id: 'UASUHDUaasihdasdAUSHDUASHDdddd',
    name: 'Cadeira para Barbear',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    photos: [
      'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    ],
    price: '780.86',
  },
  {
    id: 'UASUHDUaasihdasdAUSHDUASHD',
    name: 'Teste',
    description: 'Descrição teste para o produto.',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    price: '780.86',
  },
  {
    id: 'UASUHDUaasihdasdAUSHDUASHD',
    name: 'Teste',
    description: 'Descrição teste para o produto.',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    price: '780.86',
  },
  {
    id: 'UASUHDUaasihdasdAUSHDUASHD',
    name: 'Teste',
    description: 'Descrição teste para o produto.',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    price: '780.86',
  },
  {
    id: 'UASUHDUaasihdasdAUSHDUASHD',
    name: 'Teste',
    description: 'Descrição teste para o produto.',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    price: '780.86',
  },
  {
    id: 'UASUHDUaasihdasdAUSHDUASHD',
    name: 'Teste',
    description: 'Descrição teste para o produto.',
    photo: 'https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg',
    price: '780.86',
  },
]

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState({} as Product);

  useEffect(() => {
    const productData = products.filter(product => product.id === 'UASUHDUaasihdasdAUSHDUASHDdddd');
    setProduct(productData[0]);
  }, [])

  return (
    <Container>
      <Infos>
        <p>{product.description}</p>
        <div>
          <span>R${product.price}</span>
          <span>Adicionar ao Carrinho</span>
        </div>
      </Infos>
      <Galery>
        <div>
          <img className="product-detail-img" src={product.photo} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
      </Galery>
    </Container>
  )
}

export default ProductDetails;
