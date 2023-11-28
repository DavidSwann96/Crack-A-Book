import React from 'react';
import './ProductListing.css';
import ProductListingCard from '../cards/product-listing-card/ProductListingCard';

const ProductListing = () => {
  return (
    <div className='product-listing-container'>
      <div className='container'>
        <h2>Popular books you may like</h2>
        <div className='listing-container'>
          <ProductListingCard productId={7}/>
          <ProductListingCard productId={0}/>
          <ProductListingCard productId={4}/>
          <ProductListingCard productId={17}/>
        </div>
      </div>
    </div>
  )
}

export default ProductListing
