import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions/basketActions';
import products from '../../constants/products';
import '../../home.css';
import './product-details.css';
import ProductCard from '../../components/home/ProductCard';

const recommendedProducts = products.slice(7, 13);

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    console.log('Selected size:', selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    console.log('Selected color:', selectedColor);
  }, [selectedColor]);

  if (!product) {
    return <div className="product-details"><p>Product not found</p></div>;
  }

  const onAddToBasket = () => {
    const item = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity: 1,
      maxQuantity: 10,
      selectedSize: selectedSize || product.sizes[0],
      selectedColor: selectedColor || product.availableColors[0]
    };
    dispatch(addToBasket(item));
    console.log('Added to basket from ProductDetails:', item);
  };

  return (
    <div className="product-details">
      <div className='product-page-wrapper'>
        <Link to="/shop" className="back-link">← Back to shop</Link>

        <div className="product-wrapper">
          <div className="product-images">
            {product.imageCollection.map((img, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/image/${img}`}
                alt={`${product.name} ${index}`}
                key={index}
                className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="product-image-preview">
            <img
              className="image-preview-img"
              src={`${process.env.PUBLIC_URL}/image/${selectedImage}`}
              alt={product.name}
            />
          </div>

          <div className="product-main">
            <p className="product-brand">{product.brand}</p>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>

            <label className="label">Lens Width and Frame Size</label>
            <select
              className="select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">--Select Size--</option>
              {product.sizes.map((size, i) => (
                <option key={i} value={size}>{size}</option>
              ))}
            </select>

            <label className="label">Choose Color</label>
            <div className="color-options">
              {product.availableColors.map((color, i) => (
                <span
                  key={i}
                  className={`color-circle ${selectedColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>

            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="product-btn" onClick={onAddToBasket}>
              Add To Basket
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <section className="products-section">
        <div className='section-header'>
          <h2>Recommended Products</h2>
          <Link to="/shop" className='see-all'>See All</Link>
        </div>
        <div className="product-grid">
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} product={{ ...product }} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;