// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import products from './constants/products';
import ProductCard from './components/home/ProductCard';
import './components/home/product-card.css';
import './home.css';

const featuredProducts = products.slice(0, 6);
const recommendedProducts = products.slice(7, 13);

const Home = () => {
  return (
    <main className="home-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className='hero-inner'>
          <div className="hero-text">
            <h1>See everything with Clarity</h1>
            <p>
              Buying eyewear should leave you happy and good-looking,
              with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.
            </p>
            <Link to="/shop" className="button">
              Shop Now &#9654;
            </Link>
          </div>
          <div className='hero-img'>
            <img src={`${process.env.PUBLIC_URL}/image/banner-girl.png`} alt='banner-girl' />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className='section-header'>
          <h2>Featured Products</h2>
          <Link to="/shop" className='see-all'>See All</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={{ ...product, image: `/image/${product.image}` }} />
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="products-section">
        <div className='section-header'>
          <h2>Recommended Products</h2>
          <Link to="/shop" className='see-all'>See All</Link>
        </div>
        <div className="product-grid">
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} product={{ ...product, image: `/image/${product.image}` }} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
