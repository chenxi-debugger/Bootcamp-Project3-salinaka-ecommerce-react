import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, showPrice = false }) => {
  if (!product || !product.id) return null;

  // Ensure correct image path
  const imagePath = product.image.startsWith('/image/')
    ? `${process.env.PUBLIC_URL}${product.image}`
    : `${process.env.PUBLIC_URL}/image/${product.image}`;

  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <div className="product-image-container">
          <img
            src={imagePath}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info-1">
          <h3 className="product-name-1">{product.name}</h3>
          <p className="product-brand-1">{product.brand}</p>
          {showPrice && <p className="product-price">${product.price}</p>}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
