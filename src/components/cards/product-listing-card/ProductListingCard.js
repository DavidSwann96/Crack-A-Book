import React from 'react';
import './ProductListingCard.css';
import { BOOKS } from '../../../assets/shared/BOOKS';

const ProductListingCard = ({productId}) => {
    //Search BOOKS for matching ID
    const product = BOOKS.find((item) => item.id === productId);

    return (
        <div className='product-listing-card'>
            <div className='product-listing-img-container'>
                <img src={product.image} alt="product-listing-image" className='product-listing-img' />
            </div>
            <div className='product-listing-details-container'>
                <h3>{product.name}</h3>
                <p className='author-name'>By {product.author}</p>
                <p className='pricing'>${product.price}</p>
                <a href="" className='product-listing-button'>Add To Cart</a>
            </div>
        </div>
    )
}

export default ProductListingCard
