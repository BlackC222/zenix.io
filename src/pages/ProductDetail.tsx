import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../components/ProductPage';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id, 10) : 0;

  return <ProductPage productId={productId} />;
};

export default ProductDetail;