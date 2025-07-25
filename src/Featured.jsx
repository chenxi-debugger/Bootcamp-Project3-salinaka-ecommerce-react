// Featured.jsx
import React from 'react';
import ProductCard from './components/home/ProductCard';
import products from './constants/products';
import './components/home/product-card.css';
import './featured.css';

const featuredProducts = products.slice(0, 8);

const FeaturedPage = () => (
  <section className="section-3">
    {/* Hero Banner */}
    <div className='section-3-hero-wrapper'>
      <div className='section-3-title'>
        <div className="section-3-content">
          <h2>Featured Products</h2>
        </div>
        <div className='section-3-picture'>
          <img
            src={`${process.env.PUBLIC_URL}/image/feature-page.png`}
            className='section-3-picture-content'
            alt='feature-banner'
          />
        </div>
      </div>
    </div>

    {/* Product Grid */}
    <div className="featured-grid">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={{ ...product, image: `/image/${product.image}` }} />
      ))}
    </div>
  </section>
);

export default FeaturedPage;
