import React from 'react';
import './Product-Details.css';
import BookDetailImg from '../../assets/Books/Bar-Brawler.png';

const ProductDetails = () => {
  return (
    <section className='ProductDetails-section-container'>
      <div className='ProductDetails-container'>
        <div className='ProductDetails-flex-container'>
          <div div className='ProductDetails-BookImg-Container'>
            <img src={BookDetailImg} alt="ProductDetailsBook" className='ProductDetailsBook' />
          </div>
          <div div className='ProductDetails-BookDetails-Container'>
            <h2>BookName</h2>
            <p>Author</p>
            <p>Description</p>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
