// Recommended.jsx
import React from 'react';
import ProductCard from './components/home/ProductCard';
import products from './constants/products';
import './components/home/product-card.css';
import './recommended.css';

const recommendedProducts = products.slice(7, 13);

const RecommendedPage = () => (
  <section className="section-4">
    {/* Hero Section */}
    <div className='section-4-hero-wrapper'>
      <div className='section-4-title'>
        <div className="section-4-content">
          <h1>Recommended Products</h1>
        </div>
        <div className='section-4-picture'>
          <img
            src={`${process.env.PUBLIC_URL}/image/recomended-page.png`}
            className='section-4-picture-content'
            alt='recommended-banner'
          />
        </div>
      </div>
    </div>

    {/* Product Grid */}
    <div className="featured-grid">
      {recommendedProducts.map(product => (
        <ProductCard key={product.id} product={{ ...product, image: `/image/${product.image}` }} />
      ))}
    </div>
  </section>
);

export default RecommendedPage;
